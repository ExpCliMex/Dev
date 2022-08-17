const { getSession } = require('../lib/session');
const { SERVER_URL } = require('../constants/server');
const axios = require('axios');

function getDefaultAccount() {
  const session = getSession();
  return session.account;
}

async function getDefaultAccountBalance() {
  const { token } = getSession();
  try {
    const res = await axios.get(`${SERVER_URL}/balance`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.balance;
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
    } else if (e.request) {
      console.log(e.request);
    } else {
      console.log('Error ', e.message);
    }
  }
}

module.exports = {
  getDefaultAccount,
  getDefaultAccountBalance,
};
