const { doLogin } = require('../lib/login');
const { getSession } = require('../lib/session');

function isLoggedIn() {
  const session = getSession();
  if (!session.account) return false;
  return Boolean(session.token);
}

function isAnonymous() {
  return !isLoggedIn();
}

async function loginRequired(callback, { address = '', password = '' }) {
  const LOGIN_REQUIRED_MESSAGE_ERROR =
    'Debes iniciar sesión antes o proveer los parámetros dirección y contraseña.';
  const INVALID_OPTION_MESSAGE_ERROR =
    'Opción inválida: %s\nDebes cerrar sesión para utilizar este parámetro';
  if (isLoggedIn()) {
    if (address) return console.log(INVALID_OPTION_MESSAGE_ERROR, address);
    if (password) return console.log(INVALID_OPTION_MESSAGE_ERROR, password);
    return await callback();
  }
  if (address && password) {
    await doLogin({ address, password });
    if (isLoggedIn()) return await callback();
    return;
  }
  console.log(LOGIN_REQUIRED_MESSAGE_ERROR);
}

async function anonymousRequired(callback) {
  const ANONYMOUS_REQUIRED_ERROR_MESSAGE = 'No debes tener sesión iniciada.';
  if (isAnonymous()) return await callback();
  console.log(ANONYMOUS_REQUIRED_ERROR_MESSAGE);
}

module.exports = {
  loginRequired,
  anonymousRequired,
  isLoggedIn,
};
