const sessions = require('express-session');
const serverConfig = require("../config/serverConfiguration.json");

function configSession(app) {
    app.use(sessions({
        secret: serverConfig.secret,
        saveUninitialized: true,
        cookie: {
            maxAge: parseInt(serverConfig.jwt_expiretime)
        },
        resave: true
    }));
}

function authorizationMiddleware(req, res, next) {
    if (serverConfig.no_auth_needed.indexOf(req.originalUrl) >= 0) {
        next()
        return;
    }
    if (req.session.user != undefined) {
        next()
        return;
    }
    res.status(400);
    res.json("error");
    return;
}

module.exports = {
    configSession: configSession,
    authorizationMiddleware: authorizationMiddleware
}

