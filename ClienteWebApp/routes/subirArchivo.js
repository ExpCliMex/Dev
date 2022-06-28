const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();
const serverConnectionConfig = require("../config/serverConfiguration.json") //Config of connection to API of blockchain
const clientConnectionConfig = require("../config/clientConfiguration.json") //Config of connection to API of blockchain
const Guid = require("guid");
const fileUpload = require("express-fileupload");
const fs = require('fs');
const fileUtil = require('../util/fileUtil.js');
const crypto = require('../util/cryptoUtil.js');
const util = require("../util/util")

let sizeOfSlicedFiles = parseInt(serverConnectionConfig.sizeOfSlicedFiles);


router.use(
    fileUpload({
        createParentPath: true,
    })
);

router.get('/', (req, res) => {
    let parameters = { layout: 'layout', components: { util: util, datos: "mi mensaje" } }
    res.render('cargaArchivo', parameters);
})

//////////////////////////////////////////////////////////////////////////
// First post to save files in the server side.
///////////////////////////////////////////////////////////////////////////

router.post('/uploadFile', (req, res) => {
    let guid = Guid.create();
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }
    let fileName = req.files.image.name; // original file name
    let ext = fileName.split(".").pop()
    // console.log(fileName);
    let guidnum = guid.value;
       const path = './user_files_temporal/' + guidnum + '/' + guidnum + '.dcm'; // where the file will be saved    
    // mv is callback function that helps to save the file
    req.files.image.mv(path, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        data = {
            originalName: fileName,
            guidnum: guidnum,
            extension: ext,            
            path: path
        }
        return res.status(202).send(data);

    });

})
//////////////////////////////////////////////////////////////////////////
// Second post to encrypt, partition, decrypt
///////////////////////////////////////////////////////////////////////////
router.post('/part', (req, res) => {
    imagePath = req.body.path;
    async function main() {
        let outfilePath = crypto.encriptar(imagePath, './user_files_temporal/' + req.body.guidnum + '/' + 'fileEncrypt')
        await fileUtil.split(outfilePath, sizeOfSlicedFiles, './user_files_temporal/' + req.body.guidnum + '/' + 'particiones', req.body.guidnum);
        // await fileUtil.join('./user_files_temporal/particiones', './user_files_temporal/');
        // await crypto.desencriptar('joinFile.dcm', './user_files_temporal/fileEncrypt/secretKey.key', './user_files_temporal/fileEncrypt/vectInit', './user_files_temporal');
        return res.status(202).send("data");
    }
    main();
})


module.exports = router; 