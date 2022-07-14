const { ABI, erc20Address } = require('../constants/erc20');
const Web3 = require('web3');
const { ipcPath } = require('../../config/constants.json');
const net = require('net');

function getContract() {
  const web3 = new Web3(ipcPath, net);
  return new web3.eth.Contract(ABI, erc20Address);
}

module.exports = {
  getContract,
};
