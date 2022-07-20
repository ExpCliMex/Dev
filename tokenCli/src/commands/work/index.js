const { getSession } = require('../../lib/session');
const axios = require('axios');
const { SERVER_URL } = require('../../constants/server');
const { getSecondsOnline } = require('./ping');
const { getFilesSaved, getFilesRequested } = require('./files');

async function doWork() {
  console.log('Joining the network');
  console.log('Working');
  const { token } = getSession();
  const files = await getFilesSaved();
  const secondsOnline = await getSecondsOnline();
  const filesRequested = await getFilesRequested();
  const formData = {
    secondsOnline,
    filesRequested,
    files,
  };
  try {
    console.log('Delivering data to the server');
    const res = await axios.post(`${SERVER_URL}/work`, formData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.detail === 'ok') {
      res.data.error === false
        ? console.log(`${res.data.tokens} tokens delivered`)
        : console.log("Tokens couldn't be delivered");
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = doWork;
