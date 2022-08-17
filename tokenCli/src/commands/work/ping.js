const ping = require('ping');
const Decimal = require('decimal.js');

const SECONDS = 5;

function makePing() {
  return ping.promise.probe('dynamodb.us-east-2.amazonaws.com', {
    timeout: false,
    min_reply: false,
    deadline: SECONDS,
  });
}

async function getPacketLoss() {
  const result = await makePing();
  return result.packetLoss;
}

async function getSecondsOnline() {
  const packetLoss = await getPacketLoss();
  const secondsOffline = Decimal.mul(packetLoss, SECONDS).div(100);
  return Decimal.sub(SECONDS, secondsOffline);
}

module.exports = {
  getSecondsOnline,
};
