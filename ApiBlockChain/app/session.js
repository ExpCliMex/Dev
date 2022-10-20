const sessions = require('express-session');
const serverConfig = require("../config/constants.json");
const msg = require("./util/messages");

function configSession(app) {
    app.use(sessions({
        secret: serverConfig.secret,
        saveUninitialized: true,
        // cookie: {
        //     maxAge: parseInt(serverConfig.jwt_expiretime)
        // },
        resave: false
    }));
}

function authorizationMiddleware(req, res, next) {
    console.log("New request from session id " + req.session.id);
    if (req.session.users == undefined) {
        req.session.users = {}
    }
    if (serverConfig.no_auth_needed.indexOf(req.path) >= 0) {
        next()
        return;
    }
    if (req.session.users[req.body.userSessionId] != undefined) {
        next()
        return;
    }
    res.status(400);
    let response = {
        success: false,
        message: msg("user", "userunathorized", "es"),
        data: null
    }
    res.json(response);
    return;
}

module.exports = {
    configSession: configSession,
    authorizationMiddleware: authorizationMiddleware,
}
