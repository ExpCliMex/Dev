const express = require('express');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger('BasicNetwork');
const jwt = require('jsonwebtoken');
const msg = require("../util/messages")
const util = require("../util/util")
const invokeTransactionAdmin = require("../invoke").invokeTransactionAdmin;
const { v4: uuidv4 } = require('uuid');
const en = require('../locales/en/translation.json')
const es = require('../locales/es/translation.json')

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
      selector:{
        username: username,
        password: password
      }
    };
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
        delete responseBlockchain.data[0]["password"];
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

router.post('/constants-options/readAll', async (req, res) => {
  const tranConfig = req.body.transConfig;
  const tranConfigValid = util.validateTransactionConfig(tranConfig, true);
  if (!tranConfigValid)
    return res.json([[], tranConfigValid])
  const transArgs = ''
  const responseBlockchain = await invokeTransactionAdmin(
    tranConfig.channelName,
    tranConfig.chaincodeName,
    tranConfig.fcn,
    transArgs,
    tranConfig.org_name
  )
  if (!responseBlockchain.success) {
    res.status(400)
  }
  res.json(responseBlockchain);
})

function getPatientFhirData(data) {
  return {
    "resourceType": "Patient",
    "id": "6969841",
    "language": "spanish",
    "extension": [
      {
        "url": "https://www.hl7.org/fhir/v3/EducationLevel/cs.html",
        "valueString": "High School or secondary school degree complete ",
        "valueCode": data.patient_escolaridad
      },
      {
        // No se encuentra en el formulario
        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
        "valueAddress": {
          "city": "Rio Verde",
          "state": "San Luis Potosi"
        }
      },
      {
        "url": "https://hl7.org/fhir/2018May/occupationaldata.html",
        "valueString": data.puestoInfLab
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-religion",
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.3.215.12.11"
            }
          ],
          "text": data.patient_religion
        }
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-nationality",
        "valueCodeableConcept": {
          "text": data.patient_nacionalidad
        }
      }
    ],
    "identifier": [
      {
        "type": {
          "text": "CURP"
        },
        "system": "urn:oid:2.16.840.1.113883.4.629",
        "value": data.patient_curp
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": `${data.patient_name} ${data.patient_apellidoPaterno} ${data.patient_apellidoMaterno}`,
        "family": data.patient_apellidoPaterno,
        "given": [
          data.patient_name
        ]
      }
    ],
    // Cambior los codigos de data.patient_sex
    "gender": "male",
    "birthDate": data.patient_FechaNacimiento,
    "address": [
      {
        "use": "home",
        "line": [
          `${data.patient_calle} ${data.patient_numExt} ${data.patient_numInt}, colonia ${data.patient_colonia}`
          //"calle niños héroes #18, colonia Bungambilias"
        ],
        "postalCode": data.patient_cp,
        "city": data.patient_localidad,
        "state": data.patient_contact_estado
      }
    ],
    "maritalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          "code": "W", // TODO Revisar los codigos
          "display": data.patient_estadoCivil
        }
      ]
    },
    // TODO Verificar como guardar el generalPractitioner
    "generalPractitioner": [
      {
        "reference": "Practitioner/6969821",
        "display": "Juan Perez"
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": data.patient_celular,
        "use": "mobile"
      },
      {
        "system": "phone",
        "use": "home",
        "value": data.patient_telefono
      },
      {
        "system": "email",
        "use": "work",
        "value":data.patient_email
      }
    ],
    "contact": [
      {
        "relationship": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                "code": data.vinculo
              }
            ]
          }
        ],
        "name": {
          "family": data.apellidoPaternoResp,
          "given": [
            data.nombreResp
          ]
        },
        "address": {
          "use": "home",
          "line": [
            `${data.calleResp} ${data.numExtResp} ${data.numIntResp}, colonia ${data.coloniaResp}`
          ],
          "postalCode": data.cpResp,
          "city": data.municipioResp,
          "state": data.estadoResp
        },
        "telecom": [
          {
            "system": "phone",
            "value": data.celularResp,
            "use": "mobile"
          },
          {
            "system": "phone",
            "use": "home",
            "value": data.telefonoResp
          },
          {
            "system": "email",
            "use": "work",
            "value": data.emailResp
          }
        ]
      },
      {
        "organization": {
          "display": "ITSPR"
        }
      }
    ]
  }
}

router.post('/patient', async (req, res) => {
   const tranConfig = req.body.transConfig;
  const tranConfigValid = util.validateTransactionConfig(tranConfig, true);
  if (!tranConfigValid)
    return res.json([[], tranConfigValid])
  const patientData = getPatientFhirData(req.body.data)
  const transArgs = JSON.stringify(req.body.data)
  // TODO: Cambiar este invokeTransactionAdmin por invokeTransaction
  const responseBlockchain = await invokeTransactionAdmin(
    tranConfig.channelName,
    tranConfig.chaincodeName,
    tranConfig.fcn,
    transArgs,
    tranConfig.org_name
  )
  if (!responseBlockchain.success) {
    res.status(400)
  }
  res.json(responseBlockchain);
});

router.post('/practitioner', async (req, res) => {
  const tranConfig = req.body.transConfig;
  const tranConfigValid = util.validateTransactionConfig(tranConfig, true);
  if (!tranConfigValid)
    return res.json([[], tranConfigValid])
  const transArgs = JSON.stringify(req.body.data)
  // TODO: Cambiar este invokeTransactionAdmin por invokeTransaction
  const responseBlockchain = await invokeTransactionAdmin(
    tranConfig.channelName,
    tranConfig.chaincodeName,
    tranConfig.fcn,
    transArgs,
    tranConfig.org_name
  )
  if (!responseBlockchain.success) {
    res.status(400)
  }
  res.json(responseBlockchain);
});

router.get('/json/constants', async (req, res)=> {
  const {lngs} = req.query
  if (!lngs) return res.status(405).send('Not allowed')

  if (lngs === 'es') {
    return res.json(es)
  }

  if (lngs === 'en') {
    return res.json(en)
  }

  return res.send('invalid language')
})

module.exports = router;
