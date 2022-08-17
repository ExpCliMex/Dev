const { host, port } = require('../../config/constants.json');

const PROTOCOL = 'http';

const SERVER_URL = `${PROTOCOL}://${host}:${port}/token-management`;

module.exports = {
  SERVER_URL
};
