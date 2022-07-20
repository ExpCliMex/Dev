const { SECONDS } = require('../constants/seconds');
const Decimal = require('decimal.js');
const Web3 = require('web3');
const net = require('net');
const { ABI, erc20Address } = require('../constants/erc20');
const {
  privateKey,
  ipcPath,
  mainAddress,
} = require('../../config/constants.json');
const { getContract } = require('./smartContract');

/**
 * @typedef {Object} File
 * @property {string} name - File name.
 * @property {string} size - File size in MB.
 */

/**
 * @typedef {Object} FileRequested
 * @property {string} name - File name.
 * @property {string} size - File size in MB.
 * @property {string} times - Times a file was requested
 */

/**
 *
 * @param {{files:File[], requestedFiles: FileRequested[], secondsOnline:Number}} args
 */
function calculateTokens({ files, secondsOnline, requestedFiles }) {
  const totalStorage = files.reduce(
    (acc, file) => acc + parseInt(file.size),
    0
  );
  const requestedStorage = requestedFiles.reduce(
    (acc, file) => acc + parseInt(file.size) * parseInt(file.times),
    0
  );
  secondsOnline = secondsOnline > SECONDS ? SECONDS : secondsOnline;
  return Decimal.div(secondsOnline, SECONDS)
    .mul(requestedStorage)
    .div(totalStorage)
    .toFixed(0, Decimal.ROUND_DOWN);
}

async function giveTokens({ tokens, receiverAddress }) {
  const web3 = new Web3(ipcPath, net);
  const myContract = new web3.eth.Contract(ABI, erc20Address);
  web3.eth.accounts.wallet.add(privateKey);
  try {
    const receipt = await myContract.methods
      .transfer(receiverAddress, tokens)
      .send({
        from: mainAddress,
        gas: 30000,
      });
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    return false;
  } catch (e) {
    console.log('An error happened in the blockchain: ', e);
    return true;
  }
}

async function unlockAccount({ address, password }) {
  const web3 = new Web3(ipcPath, net);
  const unlockDuration = 0;
  try {
    return await web3.eth.personal.unlockAccount(
      address,
      password,
      unlockDuration
    );
  } catch (e) {
    console.log('An error happened in the blockchain: ', e);
    return false;
  }
}

async function balanceOf({ address }) {
  const contract = getContract();
  try {
    return await contract.methods.balanceOf(address).call();
  } catch (e) {
    console.log('An error happened in the blockchain: ', e);
    return -1;
  }
}

module.exports = {
  calculateTokens,
  giveTokens,
  unlockAccount,
  balanceOf,
};
