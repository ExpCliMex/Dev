const clientConnectionConfig = require("../config/clientConfiguration.json") //Config of connection to API of blockchain
const invoke = require("./apiConnection/invoke")

async function login(req, res, username, password){
    if(req.session.user != undefined){
        return true;
    }
    const data = {
        username : username,
        password : password
    }
    const transConfig = {
        channelName: "mychannel",
        chaincodeName: "Institutional_User", 
        fcn: "queryUsers", 
        org_name: clientConnectionConfig.organization
    }
    let result = await invoke.invokeLogin(req.session.id, data, transConfig);
    //return true or flase.
}


module.exports = {
    login: login
};
