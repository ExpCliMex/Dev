const { getVersion } = require('../lib/getVersion');

function version() {
  console.log(getVersion());
}

version.name = 'version';
version.description = 'Shows the software version';

module.exports = {
  version,
};
