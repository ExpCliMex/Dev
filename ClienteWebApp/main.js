/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const expressEjsLayout = require('express-ejs-layouts')
const bearerToken = require('express-bearer-token');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
/**
 * App Variables
 */
const init = require("./app/initialize")
const clientConnectionConfig = require("./config/clientConfiguration.json") //Config of connection to API of blockchain
const serverConfig = require("./config/serverConfiguration.json") //web client server config
const dbHelper = require("./app/dbHelper")
const session = require("./app/session")
const app = express();
/**
 *  App Configuration
 */
const port = process.env.PORT || serverConfig.port;
const host = process.env.HOST || serverConfig.host;
const node_env = process.env.NODE_ENV || "DEBUG";
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//session config
session.configSession(app);
app.use(cookieParser());
app.use(session.authorizationMiddleware);
//
app.set('view engine', 'ejs');
app.use(expressEjsLayout);
console.log("Initializing Web Client Server")
/**
 *  Routers
 */
indexRouter = require('./routes/index')
userRouter = require('./routes/users')
patientRouter = require('./routes/patient')
//Test routers
testRouter = require('./routes/testRoutes')
//subirArchivo = require('./routes/subirArchivo')
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
app.use('/patients', patientRouter);
//app.use('/subirarchivo', subirArchivo);
// Test routes, only for NONPRODUCTION executions
if(node_env !== 'PRODUCTION'){
    app.use('/test', testRouter);
}
/**
 * Server Activation
 */
app.listen(port, host, () => {
    console.log("Server initialized in port:" + port)
})
