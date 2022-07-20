const SESSION_KEY = 'session';

function saveSession({ account = '', token = '' }) {
  const session = {
    account,
    token,
  };
  global.session = session;
}

/**
 *
 * @returns {{account: string, token: string}}
 */
function getSession() {
  return (
    global.session || {
      account: '',
      token: '',
    }
  );
}

function clearSession() {
  global.session = null;
}

module.exports = {
  saveSession,
  getSession,
  SESSION_KEY,
  clearSession,
};
