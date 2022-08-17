const express = require('express');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger('BasicNetwork');
const jwt = require('jsonwebtoken');
const msg = require("../util/messages")
const util = require("../util/util")
const invokeTransactionAdmin = require("../invoke").invokeTransactionAdmin;

// Register and enroll user
router.post('/', async function (req, res) {
    //channelName, chaincodeName, fcn, args, username, org_name, transientData
    var tranConfig = req.body.transConfig;//{channelName, chaincodeName, fcn, org_name}
    var username = req.body.data.username;
    var name = req.body.data.name;
    var lastName = req.body.data.lastName;
    var email = req.body.data.email;
    var password = req.body.data.password;
    var role = req.body.data.role;
    //errors verification
    var errors = [];
    if (!username) {
        errors.push(msg("user", "nousername", "es"));
    }
    if (!name) {
        errors.push(msg("user", "noname", "es"));
    }
    if (!lastName) {
        errors.push(msg("user", "nolastname", "es"));
    }
    if (!email) {
        errors.push(msg("user", "noemail", "es"));
    }
    if (!password) {
        errors.push(msg("user", "nopassword", "es"));
    }
    if (!role) {
        errors.push(msg("user", "norole", "es"));
    }
    tranConfigValid = util.validateTransactionConfig(tranConfig, true)
    if (errors.length > 0 || !tranConfigValid) {
        result = {
            sucess: false,
            message: "error",
            data: [errors, tranConfigValid],
            status: 400
        }
        res.json(result);
        return;
    }
    var tranArgs = [username, name, lastName, email, password, role];
    //channelName, chaincodeName, fcn, args, username, org_name, transientData
    var responseBlockchain = await invokeTransactionAdmin(tranConfig.channelName,
        tranConfig.chaincodeName,
        tranConfig.fcn,
        tranArgs,
        tranConfig.org_name
    );
    if (responseBlockchain.success) {
        result = {
            sucess: true,
            message: "ok",
            data: responseBlockchain,
            status: 200
        }
        res.json(result);
    } else {
        result = {
            sucess: false,
            message: "ok",
            data: responseBlockchain,
        }
        res.status(400);
        console.log(responseBlockchain)
        res.json(result);
    }
});
// router.post('/register', async function (req, res) {
//     var username = req.body.username;
//     var orgName = req.body.orgName;
//     var name = req.body.name;
//     var lastName = req.body.lastName;
//     var email = req.body.email;
//     var password = req.body.password;
//     //errors verification
//     var errors = [];
//     if (!username) {
//         errors.push(msg("user","nousername","es"));
//     }
//     if (!name) {
//         errors.push(msg("user","noname","es"));
//     }
//     if (!lastName) {
//         errors.push(msg("user","nolastname","es"));
//     }
//     if (!email) {
//         errors.push(msg("user","noemail","es"));
//     }
//     if (!password) {
//         errors.push(msg("user","nopassword","es"));
//     }
//     if(errors.length>0){
//         res.json(errors)
//     }

//     var token = jwt.sign({
//         exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
//         username: username,
//         orgName: orgName
//     }, app.get('secret'));

//     console.log(token)

//     let response = await helper.registerAndGerSecret(username, orgName);

//     logger.debug('-- returned from registering the username %s for organization %s', username, orgName);
//     if (response && typeof response !== 'string') {
//         logger.debug('Successfully registered the username %s for organization %s', username, orgName);
//         response.token = token;
//         res.json(response);
//     } else {
//         logger.debug('Failed to register the username %s for organization %s with::%s', username, orgName, response);
//         res.json({ success: false, message: response });
//     }

// });

module.exports = router;
