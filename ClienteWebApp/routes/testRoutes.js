const user_logic = require("../app/user")
const express = require('express');
const router = express.Router();
const msg = require("../util/messages")

router.post('/form_test', async (req, res) => {
    console.log(req.body)
    return;
});

module.exports = router; 