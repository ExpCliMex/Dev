const serverConfig = require("../config/serverConfiguration.json") //web client server config
const dbHelper = require("../app/dbHelper")
const fs = require('fs')
//
async function initialize() {
    if (!serverConfig.initialized) {
        user = new dbHelper.User();
        await user.createTable()
        await user.create(
            serverConfig.defaultDbCredentials.full_name,
            serverConfig.defaultDbCredentials.user_name,
            serverConfig.defaultDbCredentials.pwd,
            serverConfig.defaultDbCredentials.phone,
            serverConfig.defaultDbCredentials.email
        )
        serverConfig.initialized = true
        let json = JSON.stringify(serverConfig);
        await fs.writeFile("~/../config/serverConfiguration.json", json, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON Configuration file has been saved.");
            console.log("WebClient Initialized")
        });

    }
}
module.exports.initialize = initialize