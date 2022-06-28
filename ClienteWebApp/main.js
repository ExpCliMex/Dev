/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const expressEjsLayout = require('express-ejs-layouts')
/**
 * App Variables
 */
const init = require("./app/initialize")
const clientConnectionConfig = require("./config/clientConfiguration.json") //Config of connection to API of blockchain
const serverConfig = require("./config/serverConfiguration.json") //web client server config
const dbHelper = require("./app/dbHelper")
const app = express();
/**
 *  App Configuration
 */
const port = serverConfig.port;
const host = serverConfig.host;
app.set('view engine', 'ejs');
app.use(expressEjsLayout);
console.log("Initializing Web Client Server")
/**
 *  Routers
 */
 indexRouter = require('./routes/index')
 userRouter = require('./routes/users')
 subirArchivo = require('./routes/subirArchivo')
/**
 * Server Initialization
 */
init.initialize()
/**
 * Server Middleware
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/**
 * Routes Definitions
 */
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/subirarchivo', subirArchivo);
/**
 * Server Activation
 */
app.listen(port, host, () => {
    console.log("Server initialized in port:" + port)
}) 