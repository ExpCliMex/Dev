const {
  directoryExists,
  deleteDirectory,
  createDirectory,
  getCurrentDirectory,
} = require('./files.js');
const path = require('node:path');
const chalk = require('chalk');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const dataDirectory = path.join(getCurrentDirectory(), 'data');
const gethDataDirectory = path.join(dataDirectory, 'geth');
const keystoreDataDirectory = path.join(dataDirectory, 'keystore');
const ipcDataDirectory = path.join(dataDirectory, 'geth.ipc');

function clearChain() {
  const dataDirectory = path.join(process.cwd(), 'data');
  if (directoryExists(dataDirectory)) {
    console.log(chalk.red('Erasing blockchain'));
    deleteDirectory(dataDirectory);
    createDirectory(dataDirectory);
  }
}

function getScriptDirectory() {
  const fs = require('node:fs');
  return path.dirname(fs.realpathSync(__filename));
}

async function validateDatadir() {
  if (!directoryExists(dataDirectory)) {
    createDirectory(dataDirectory);
    console.log(chalk.green('Init datadir'));
  }
  if (
    !directoryExists(gethDataDirectory) ||
    !directoryExists(keystoreDataDirectory)
  ) {
    console.log(chalk.yellow('Init node'));
    const scriptDirectory = getScriptDirectory();
    const genesisPath = path.join(scriptDirectory, 'Genesis.json');
    const { stdout, stderr } = await exec(
      `geth --datadir ${dataDirectory} init ${genesisPath}`
    );
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
}

module.exports = {
  validateDatadir,
  dataDirectory,
  ipcDataDirectory,
};
