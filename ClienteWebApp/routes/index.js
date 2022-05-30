const express = require('express');
const router = express.Router();
const clientConnectionConfig = require("../config/clientConfiguration.json") //Config of connection to API of blockchain
const axios = require('axios');
//login page
router.get('/', (req, res) => {
    res.render('index', { layout: 'layout' });
})
//register page
router.get('/register', (req, res) => {
    res.render('register', { layout: 'layout' });
})

router.get('/save', (req, res) => {
    //res.render('register', { layout: 'layout' });
    config = {
        headers: {
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM5NzEwMDcsInVzZXJuYW1lIjoicGF2YW4xIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE2NTM5MzUwMDd9.o45WkyargXc6_16G3st3FBel1d62H9f7QfSjBUERzfo",
            'Content-Type': 'application/json'
        }
    }
    data = {
        "fcn": "createCar",
        "peers": ["peer0.org1.example.com", "peer0.org2.example.com"],
        "chaincodeName": "fabcar",
        "channelName": "mychannel",
        "args": ["SuperCar33344444", "AUDI111", "F1-Reloaded", "White", "Pulkit"]
    }
    axios
        .post('http://' + clientConnectionConfig.host + ":" + clientConnectionConfig.port + '/channels/mychannel/chaincodes/fabcar',
            data,
            config
        )
        .then(resReq => {
            console.log(`statusCode: ${resReq.status}`);
            console.log(resReq);
            res.send(resReq)
        })
        .catch(error => {
            console.error(error);
            res.send(error)
        });
})

module.exports = router; 