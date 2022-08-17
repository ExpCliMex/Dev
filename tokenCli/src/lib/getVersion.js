function getVersion () {
  const pjson = require('../../package.json');
  return pjson.version;
}

module.exports = {
  getVersion
};
