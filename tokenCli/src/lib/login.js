const { saveSession } = require('./session');
const axios = require('axios');
const { SERVER_URL } = require('../constants/server');

async function doLogin({ address, password }) {
  console.log('Inicando sesión...');
  try {
    const res = await axios.post(
      `${SERVER_URL}/login/password`,
      {
        password,
        address,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    );
    if (res.data.error) {
      console.log(res.data.detail);
    } else {
      saveSession({
        account: address,
        token: res.data.detail,
      });
      console.log('Sesión iniciada exitosamente');
    }
  } catch (e) {
    console.log('Falló el inicio de sesión');
    if (!e.response) {
      console.log(
        'No se pudo conectar al servidor, verifique su conexión de internet'
      );
    }
  }
}

async function promptLogin({ address, password }) {
  await doLogin({
    address,
    password,
  });
}

module.exports = {
  promptLogin,
  doLogin,
};
