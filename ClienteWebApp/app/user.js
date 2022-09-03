const clientConnectionConfig = require("../config/clientConfiguration.json") //Config of connection to API of blockchain
const invoke = require("./apiConnection/invoke")

async function login(req, res, username, password) {
    try {
        if (req.session.user != undefined) {
            return true;
        }
        const data = {
            username: username,
            password: password
        }
        const transConfig = {
            channelName: "mychannel",
            chaincodeName: "Institutional_User",
            fcn: "queryUser",
            org_name: clientConnectionConfig.organization
        }
        let result = await invoke.invokeLogin(req, req.session.id, data, transConfig);
        if (result.data.data.length > 0) {
            req.session.user = result.data.data[0];
            return true;
        }
        return false;
        //return true or flase.
    } catch (ex) {
        return false;
    }
}


module.exports = {
    login: login
};
