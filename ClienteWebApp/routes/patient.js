const express = require("express");
const { encodeBody } = require("../util/encodeBody");
const { getApiUrl } = require("../util/url");
const axios = require("axios");
const crypto = require("node:crypto");
const { decodePatient } = require("../util/decodeResources/patient");

const router = express.Router();

router.post("/create", async (req, res) => {
    const body = { ...req.body };
    body.patient_numExp = crypto.randomUUID();
    const encodedBody = encodeBody(body);
    const patientData = encodedBody[0];
    const url = getApiUrl("/user/patient");
    const data = {
        data: patientData,
        transConfig: {
            channelName: "mychannel",
            chaincodeName: "Institutional_User",
            fcn: "institutional_Patient:createPatient",
            org_name: "Org1",
        },
    };
    const config = {
        "Content-Type": "application/json",
    };
    const response = await axios.post(url, data, config);
    res.json(response.data);
});

router.post("/read", async (req, res) => {
    const patientId = req.body.patientId;
    const url = getApiUrl("/user/patient");
    const data = {
        data: { id: patientId },
        transConfig: {
            channelName: "mychannel",
            chaincodeName: "Institutional_User",
            fcn: "institutional_Patient:readPatient",
            org_name: "Org1",
        },
    };
    const config = {
        "Content-Type": "application/json",
    };
    // return res.json({data, url, patientId, config})
    const response = await axios.post(url, data, config);
    const decodedPatient = decodePatient(response.data.data);
    res.json(decodedPatient);
});

router.post("/update", async (req, res) => {
    const patientId = req.body.patientId;
    const encodedBody = encodeBody(req.body);
    const url = getApiUrl("/user/patient");
    const data = {
        data: encodedBody[0],
        transConfig: {
            channelName: "mychannel",
            chaincodeName: "Institutional_User",
            fcn: "institutional_Patient:updatePatient",
            org_name: "Org1",
        },
    };
    const config = {
        "Content-Type": "application/json",
    };
    const response = await axios.post(url, data, config);

    res.json(response.data);
});

router.post("/delete", async (req, res) => {
    const encodedBody = encodeBody(req.body);
    const url = getApiUrl("/user/patient");
    const patientData = { id: encodedBody[0].id };
    const data = {
        data: patientData,
        transConfig: {
            channelName: "mychannel",
            chaincodeName: "Institutional_User",
            fcn: "institutional_Patient:deleteLogicPatient",
            org_name: "Org1",
        },
    };
    const config = {
        "Content-Type": "application/json",
    };
    const response = await axios.post(url, data, config);
    res.json(response.data);
});

module.exports = router;
