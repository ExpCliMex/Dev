const serverConfiguration = require("../config/serverConfiguration.json")

function getServerUrl(){
	let host = serverConfiguration.host
	let port = serverConfiguration.port
	let protocol = "http"
	return protocol + "://" + host + ":" + port + "/"
//	return "http://localhost:4000/"
}

module.exports ={
	getServerUrl : getServerUrl
}
// host -> del archivo serverConfiguration
// port -> del archivo serverConfiguration
// protocolo -> Lo sacas del objeto req.->http/https