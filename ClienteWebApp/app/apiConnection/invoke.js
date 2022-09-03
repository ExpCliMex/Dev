const clientConnectionConfig = require("../../config/clientConfiguration.json") //Config of connection to API of blockchain
const axios = require('axios');

async function getSession(req) {
    try {
        let url = clientConnectionConfig.protocol + '://' + clientConnectionConfig.host + ':' + clientConnectionConfig.port + '/ping';
        let promise = axios({ url: url });
        let response = await promise;
        req.session.apiHeaders = response.headers;
        console.log(response);
        return true;
    } catch (ex) {
        throw new Error("Session can not be created")
    }
}

async function validateApiConnection(req) {
    try {
        if (!req.session.apiHeaders) {
            await getSession(req);
        }
    } catch (ex) {
        throw new Error("Error getting api connection")
    }
}

async function invokeLogin(req, sessionId, data, transConfig) {
    try {
        await validateApiConnection(req);
        let sessionIdInApi = req.session.apiHeaders["set-cookie"][0];
        let body = {
            sessionId: sessionId,
            transConfig: transConfig,
            data: data
        }
        let url = clientConnectionConfig.protocol + '://' + clientConnectionConfig.host + ':' + clientConnectionConfig.port + '/user/login';
        let promise = axios({
            method: "post",
            url: url,
            data: body,
            headers: {
                Cookie : sessionIdInApi
            }
        });
        var result = await promise;
        return result;
    } catch (ex) {
        return false;
    }
    // config = {
    //     headers: {
    //         Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM5NzEwMDcsInVzZXJuYW1lIjoicGF2YW4xIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE2NTM5MzUwMDd9.o45WkyargXc6_16G3st3FBel1d62H9f7QfSjBUERzfo",
    //         'Content-Type': 'application/json'
    //     }
    // }

    // .then(resReq => {
    //     console.log(`statusCode: ${resReq.status}`);
    //     console.log(resReq);
    //     return resReq;
    // })
    // .catch(error => {
    //     console.error(error);
    //     return error;
    // });
}

module.exports = {
    invokeLogin: invokeLogin,
}