const clientConnectionConfig = require("../config/clientConfiguration.json")

function getApiUrl(url) {
  return `http://${clientConnectionConfig.host}:${clientConnectionConfig.port}${url}`;
}

module.exports = {getApiUrl}
