
const fs = require('fs');
const splitFileStream = require("split-file-stream");
path = require('path');
//

module.exports = {
    //////////////////////////////////////////////////////////////////////
    //-----------------Funcion Split--------------------------------
    //////////////////////////////////////////////////////////////////////
    split: async function (imagenPath, numMB, outputPath,namePart) {
        maxFileSize = 1024 * (numMB * 1000);
        // Crea el folder en caso de que no exista
        try {
            if (!fs.existsSync(outputPath)) {
                fs.mkdirSync(outputPath);
            }
        } catch (err) {
            console.error(err);
        }
        let PathParts = outputPath + "/"+namePart+"-"+"part"; // nombra el prefijo de las partes
        file2split = fs.readFileSync(imagenPath);
        let len = file2split.length;
        let numPart = Math.ceil(len / maxFileSize);
        await splitAwait(len);

        async function splitAwait(len) {
            console.log("Beginning splitting files....... ")
            var customSplit = splitFileStream.getSplitWithGenFilePath((n) => `${PathParts}-${(n + 1)}`);
            customSplit(fs.createReadStream(imagenPath), maxFileSize, (error, filePaths) => {
                if (error) throw error;
                console.log("The split parts are in", filePaths);
            });

            while (!fs.existsSync(outputPath + '/part-' + numPart)) {
                await sleep(1);
            }
            let fullPath, totalSize = 0;
            while (totalSize < len) {
                for (let index = 1; index <= numPart; index++) {
                    fullPath = outputPath + '/part-' + index;
                    size = fs.statSync(fullPath).size; // Get size of file
                    totalSize += size;
                }
                await sleep(1);
            }

        }
        console.log("Finished spliting files....... ");

    },
    //////////////////////////////////////////////////////////////////////
    //-----------------Funcion Join--------------------------------
    //////////////////////////////////////////////////////////////////////
    join: async function (inputPath, outputPath) {
        console.log("Merging files.............")
        let filePaths = fs.readdirSync(inputPath);
        var fullPathPart = [];
        var temp = [];
        let fullSize = 0;
        for (let x = 0; x < filePaths.length; x++) {
            fullPathPart.push(inputPath + '/' + filePaths[x])
            temp = fs.readFileSync(fullPathPart[x]);
            fullSize += temp.length;
        }
        let pathSplit = outputPath + "joinFile.dcm";
        await merge();

        async function merge() {
            splitFileStream.mergeFilesToDisk(fullPathPart, pathSplit, () => { });


            while (!fs.existsSync(pathSplit)) {
                await sleep(1);
            }
            fileMerge = fs.readFileSync(pathSplit);
            while (fileMerge.length < fullSize) {
                fileMerge = fs.readFileSync(pathSplit);
                await sleep(1);
            }
            console.log("Finished merging files........")
        }
    }

};
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
};