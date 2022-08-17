const clientConnectionConfig = require("../../config/clientConfiguration.json") //Config of connection to API of blockchain
const axios = require('axios');

async function invokeLogin(sessionId, data, transConfig) {
    // config = {
    //     headers: {
    //         Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM5NzEwMDcsInVzZXJuYW1lIjoicGF2YW4xIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE2NTM5MzUwMDd9.o45WkyargXc6_16G3st3FBel1d62H9f7QfSjBUERzfo",
    //         'Content-Type': 'application/json'
    //     }
    // }
    body = {
        userSessionId : sessionId,
        transConfig: transConfig,
        data: data
    }
    var result = await axios.post(clientConnectionConfig.protocol + '://' + clientConnectionConfig.host + ":" + clientConnectionConfig.port + '/user/login',
        body
    )
    // .then(resReq => {
    //     console.log(`statusCode: ${resReq.status}`);
    //     console.log(resReq);
    //     return resReq;
    // })
    // .catch(error => {
    //     console.error(error);
    //     return error;
    // });
    return result;
}

module.exports = {
    invokeLogin: invokeLogin,
}