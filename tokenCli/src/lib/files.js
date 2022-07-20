const fs = require('node:fs');
const path = require('node:path');

function getCurrentDirectoryBase () {
  return path.basename(process.cwd());
}

function directoryExists (filePath) {
  return fs.existsSync(filePath);
}

function deleteDirectory (filePath) {
  return fs.rmdirSync(filePath, { recursive: true });
}

function createDirectory (filePath) {
  return fs.mkdirSync(filePath);
}

function getCurrentDirectory () {
  return process.cwd();
}

module.exports = {
  getCurrentDirectoryBase,
  directoryExists,
  deleteDirectory,
  createDirectory,
  getCurrentDirectory
};
