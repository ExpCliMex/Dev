//
const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes-256-ctr';
path = require('path');
//
module.exports = {
    //////////////////////////////////////////////////////////////////////
    //-----------------Funcion Encriptar--------------------------------
    //////////////////////////////////////////////////////////////////////
    encriptar: function (pathFile2Ecrypt, outputPath) {
        const encrypt = (buffer) => new Promise((resolve, reject) => {
            console.log("Encrypting..........")
            let key = 'MySecretKey';
            key = crypto.createHash('sha256').update(String(key)).digest('base64').substring(0, 32);
            const iv = crypto.randomBytes(16);
            //console.log(iv);
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
            let encriptPath = outputPath + '/encryptedFile';
            resolve(fs.writeFileSync(encriptPath, result));
            // } catch (err) {
            //     console.error(err);
            // }
            console.log('Original file encrypted succesfully 100%');

            let viPath = outputPath + '/vectInit';
            fs.writeFileSync(viPath, iv);
            console.log("vi created")

            let keyPath = outputPath + '/secretKey.key';
            fs.writeFileSync(keyPath, key);
            console.log("key created");

            console.log('The Files are in: ' + outputPath);

        });


        file = fs.readFileSync(pathFile2Ecrypt);
        try {
            if (!fs.existsSync(outputPath)) {
                fs.mkdirSync(outputPath);
            }
        } catch (err) {
            console.error(err);
        }

        encrypt(file)
        return outfilePath = outputPath + '/encryptedFile';
    },
    //////////////////////////////////////////////////////////////////////
    //-----------------Funcion desencriptar--------------------------------
    //////////////////////////////////////////////////////////////////////
    desencriptar: async function (File2Desencrypt, key, iv, outputPath) {
        const decrypt = async (encrypted) => {
            // const iv = encrypted.slice(0, 16);
            const vi = fs.readFileSync(iv);
            // console.log(vi);
            const llave = fs.readFileSync(key);
            // console.log(llave);
            encrypted = encrypted.slice(16);
            const decipher = crypto.createDecipheriv(algorithm, llave, vi);
            const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
            return result;
        }
        try {
            file = fs.readFileSync(File2Desencrypt);
            // while(file.length==0){
            //     // console.log("File is empty!")
            // }
        }
        catch (err) {
            console.error(err);
        }
        console.log("Decrypting.............")
        const decryptedFile = await decrypt(file);
        outputPath = outputPath + '/decrypt_file.dcm';
        try {
            fs.writeFileSync(outputPath, decryptedFile);
            console.log('File dencrypted succesfully 100%');
        }
        catch (err) {
            console.error(err);
        }

    }

};