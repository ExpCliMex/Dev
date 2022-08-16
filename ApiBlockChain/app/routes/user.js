const express = require('express');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger('BasicNetwork');
const jwt = require('jsonwebtoken');
const msg = require("../util/messages")
const util = require("../util/util")
const invokeTransactionAdmin = require("../invoke").invokeTransactionAdmin;

router.post('/login', async function (req, res) {
    var tranConfig = req.body.transConfig;//{channelName, chaincodeName, fcn, org_name}
    var username = req.body.data.username;
    var password = req.body.data.password;
    var errors = [];
    if (!username) {
        errors.push(msg("user", "nousername", "es"));
    }
    if (!password) {
        errors.push(msg("user", "nopassword", "es"));
    }
    tranConfigValid = util.validateTransactionConfig(tranConfig, true)
    if (errors.length > 0 || !tranConfigValid) {
        res.json([errors, tranConfigValid])
        return;
    }
    var tranArgs = {
        username: username,
        password: password
    }
    let transArg = JSON.stringify(tranArgs);
    //channelName, chaincodeName, fcn, args, username, org_name, transientData
    var responseBlockchain = await invokeTransactionAdmin(
        tranConfig.channelName,
        tranConfig.chaincodeName,
        tranConfig.fcn,
        transArg,
        tranConfig.org_name
    );
    if (responseBlockchain.data.length > 0) {
        req.session.users[req.body.sessionId] = responseBlockchain.data[0];
    }
    if (!responseBlockchain.success) {
        res.status(400);
    }
    res.json(responseBlockchain);
    return;
});
module.exports = router;