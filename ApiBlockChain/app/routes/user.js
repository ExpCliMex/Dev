const express = require('express');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger('BasicNetwork');
const jwt = require('jsonwebtoken');
const msg = require("../util/messages")
const util = require("../util/util")
const invokeTransactionAdmin = require("../invoke").invokeTransactionAdmin;
const { v4: uuidv4 } = require('uuid');

router.post('/login', async function (req, res) {
    var tranConfig = req.body.transConfig;//{channelName, chaincodeName, fcn, org_name}
    var username = req.body.data.username;
    var password = req.body.data.password;
    var errors = [];
    if (!username) {
        errors.push(msg("user", "nousername", "es"));
    }
    if (!password) {
        errors.push(msg("user", "nopassword", "es"));
    }
    tranConfigValid = util.validateTransactionConfig(tranConfig, true)
    if (errors.length > 0 || !tranConfigValid) {
        res.json([errors, tranConfigValid])
        return;
    }
    var tranArgs = {
        username: username,
        password: password
    }
    let transArg = JSON.stringify(tranArgs);
    //channelName, chaincodeName, fcn, args, username, org_name, transientData
    var responseBlockchain = await invokeTransactionAdmin(
        tranConfig.channelName,
        tranConfig.chaincodeName,
        tranConfig.fcn,
        transArg,
        tranConfig.org_name
    );
    if (responseBlockchain.data.length > 0) {
        req.session.users[req.body.sessionId] = responseBlockchain.data[0];
    }
    if (!responseBlockchain.success) {
        res.status(400);
    }
    res.json(responseBlockchain);
    return;
});

router.post('/users/', async (req, res) => {
  const tranConfig = req.body.transConfig;
  const { username, name, email, password, role, id } = req.body.data;
  const errors = [];
  let userData = { username, name, email, password, role, id: id || String(uuidv4()) }
  const tranConfigValid = util.validateTransactionConfig(tranConfig, true);
  if(tranConfigValid){
    if(tranConfig.fcn === 'readUser' || tranConfig.fcn === 'deleteUser'){
      !id && errors.push(msg("user", 'noid', 'es'));
    }
    else if (tranConfig.fcn === 'queryUser') {
      !req.body.data ? errors.push(msg('user', 'noid')) : userData = req.body.data;
    }
    else {
      Object.entries(userData).forEach(([fieldName, field]) => {
        if (!field) {
          errors.push(msg("user", `no${fieldName}`, 'es'))
        }
      });
    }
  }
  if (errors.length > 0 || !tranConfigValid) {
    res.json([errors, tranConfigValid])
    return;
  }
  const transArgs = JSON.stringify(userData)
  const responseBlockchain = await invokeTransactionAdmin(
    tranConfig.channelName,
    tranConfig.chaincodeName,
    tranConfig.fcn,
    transArgs,
    tranConfig.org_name
  )
  if (!responseBlockchain.success) {
    res.status(400);
  }
  res.json(responseBlockchain);
})

router.post('/staff', async (req, res) =>{
  const tranConfig = req.body.transConfig;
  const {
    prefix,
    specialty,
    specialty_text,
    subSpecialty,
    colleage,
    curp,
    professionalLicense,
    healtPersonalType,
    state,
    cellphone,
    telephone,
    id
  } = req.body.data;
  const errors = [];
  let staffData = {
    prefix,
    specialty,
    specialty_text,
    subSpecialty,
    colleage,
    curp,
    professionalLicense,
    healtPersonalType,
    state,
    cellphone,
    telephone,
    id: id || String(uuidv4())
  }
  const tranConfigValid = util.validateTransactionConfig(tranConfig, true);
  if(tranConfigValid){
    if(tranConfig.fcn === 'institutional_staff:readStaff' || tranConfig.fcn === 'institutional_staff:deleteStaff'){
      !id && errors.push(msg("user", 'noid', 'es'));
    }
    else if (tranConfig.fcn === 'institutional_staff:queryStaff') {
      !req.body.data ? errors.push(msg('user', 'noid')) : staffData = req.body.data;
    }
    else {
      Object.entries(staffData).forEach(([fieldName, field]) => {
        if (!field) {
          console.log(fieldName);
          errors.push(msg("user", `no${fieldName}`, 'es'))
        }
      });
    }
  }
  if (errors.length > 0 || !tranConfigValid) {
    res.json([errors, tranConfigValid])
    return;
  }
  const transArgs = JSON.stringify(staffData)
  const responseBlockchain = await invokeTransactionAdmin(
    tranConfig.channelName,
    tranConfig.chaincodeName,
    tranConfig.fcn,
    transArgs,
    tranConfig.org_name
  )
  if (!responseBlockchain.success) {
    res.status(400);
  }
  res.json(responseBlockchain);
})

router.post('/institution', async (req, res) =>{
  const tranConfig = req.body.transConfig;
  const {
    highway,
    highwayName,
    streetNumber,
    suiteNumber,
    settlement,
    settlementName,
    locality,
    municipalty,
    state,
    postalCode,
    country,
    telephone,
    cellphone,
    email,
    timezone,
    clues,
    name,
    sanitaryLicense,
    establishmentName,
    oid,
    id,
    } = req.body.data;
  const errors = [];
  let institutionData = {
    highway,
    highwayName,
    streetNumber,
    suiteNumber,
    settlement,
    settlementName,
    locality,
    municipalty,
    state,
    postalCode,
    country,
    telephone,
    cellphone,
    email,
    timezone,
    clues,
    name,
    sanitaryLicense,
    establishmentName,
    oid,
    id: id || String(uuidv4())
    }
  const tranConfigValid = util.validateTransactionConfig(tranConfig, true);
  if(tranConfigValid){
    if(tranConfig.fcn === 'institutional_institution:readInstitution' || tranConfig.fcn === 'institutional_institution:deleteInstitution'){
      !id && errors.push(msg("user", 'noid', 'es'));
    }
    else if (tranConfig.fcn === 'institutional_institution:queryInstitution') {
      !req.body.data ? errors.push(msg('user', 'noid')) : institutionData = req.body.data;
    }
    else {
      Object.entries(institutionData).forEach(([fieldName, field]) => {
        if (!field) {
          console.log(fieldName);
          errors.push(msg("user", `no${fieldName}`, 'es'))
        }
      });
    }
  }
  if (errors.length > 0 || !tranConfigValid) {
    res.json([errors, tranConfigValid])
    return;
  }
  const transArgs = JSON.stringify(institutionData)
  const responseBlockchain = await invokeTransactionAdmin(
    tranConfig.channelName,
    tranConfig.chaincodeName,
    tranConfig.fcn,
    transArgs,
    tranConfig.org_name
  )
  if (!responseBlockchain.success) {
    res.status(400);
  }
  res.json(responseBlockchain);
})

module.exports = router;
