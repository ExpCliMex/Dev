const express = require("express");
const bodyParser = require('body-parser');
const db = require("../db");
const {
  calculateTokens,
  giveTokens,
  unlockAccount,
  balanceOf,
} = require("../lib/transactions");
const { port } = require("../../config/constants.json");
const bearerToken = require("express-bearer-token");


const router = express.Router();

router.use(bodyParser.json());
router.use(bearerToken());

const baseUrl = '/token-management';

router.use((req, res, next) => {
  if(req.originalUrl.indexOf(`${baseUrl}/login/password`) >= 0){
    return next();
  }
  const token = req.token;
  db.users.findByToken(token, function (err, user) {
    const invalidTokenError = 'Failed to authenticate token. Make sure to include the ' +
                              'token returned from /token-management/login/password call in the authorization header ' +
                              'as a Bearer token';
    if (err) {
      return res.json({
        success: false,
        message: invalidTokenError
      });
    }
    if (!user) {
      return res.json({
        success: false,
        message: invalidTokenError
      });
    }
    req.user = user;
    return next();
  });
})

router.post("/login/password", async (request, response) => {
  const { address, password } = request.body;
  if (!address) {
    response.json({ error: true, detail: "Address required" });
    return;
  }
  if (!password) {
    response.json({ error: true, detail: "Password required" });
    return;
  }
  const INVALID_CREDENTIALS_MESSAGE = "Incorrect address or password";
  const isValidUser = await unlockAccount({ address, password });
  if (!isValidUser) {
    return response.json({ error: true, detail: INVALID_CREDENTIALS_MESSAGE });
  }
  db.users.findByAddress(address, (err, user) => {
    if (err) {
      response.json({
        error: true,
        detail: "Your address or password is incorrect",
      });
      return;
    }
    response.json({ error: false, detail: user.token });
  });
});

router.get(
  "/token",
  function (req, res) {
    res.json({ address: req.user.address });
  }
);

router.post(
  "/work",
  async (req, res) => {
    const secondsOnline = parseInt(req.body.secondsOnline);
    const requestedFiles = req.body.filesRequested;
    const files = req.body.files;
    if (Number.isNaN(secondsOnline)) {
      res.json({
        error: true,
        detail: "secondsOnline must be a number",
      });
      return;
    }
    if (!Array.isArray(requestedFiles)) {
      res.json({
        error: true,
        detail: "filesRequested must be an array",
      });
      return;
    }
    if (!requestedFiles.every((file) => file.name && file.size && file.times)) {
      res.json({
        error: true,
        detail: "filesRequested must have the properties: name, size, times",
      });
      return;
    }
    if (!Array.isArray(files)) {
      res.json({
        error: true,
        detail: "files must be an array",
      });
      return;
    }
    if (!files.every((file) => file.name && file.size)) {
      res.json({
        error: true,
        detail: "files must have the properties: name, size",
      });
      return;
    }
    const tokens = calculateTokens({ files, secondsOnline, requestedFiles });
    const address = req.user.address;
    console.log("Realizando entrega de tokens");
    const error = await giveTokens({ tokens, receiverAddress: address });
    res.json({ detail: "ok", tokens, error });
  }
);

router.get(
  "/balance",
  async (req, res) => {
    const balance = await balanceOf({ address: req.user.address });
    return res.json({ detail: "ok", balance });
  }
);

module.exports = router;
