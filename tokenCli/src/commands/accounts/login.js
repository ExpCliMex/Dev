const commandLineArgs = require('command-line-args');
const { anonymousRequired } = require('../../constants/permissions');
const { promptLogin } = require('../../lib/login');
const { generateCommandUsage } = require('../../lib/helpText');
const { loginDefinitions } = require('../../lib/definitions');

const mainDefinitions = [...loginDefinitions];

async function login(argv) {
  const mainCommand = commandLineArgs(mainDefinitions, {
    partial: true,
    argv,
  });
  const { password, address } = mainCommand;
  const helpText = generateCommandUsage({
    name: 'login',
    description: 'Login in the server',
    args: mainDefinitions,
  });
  if (!address) {
    console.log('Missing address');
    console.log(helpText);
    return;
  }
  if (!password) {
    console.log('Missing password');
    console.log(helpText);
    return;
  }
  await anonymousRequired(() => {
    return promptLogin({
      address: mainCommand.address,
      password: mainCommand.password,
    });
  });
}

login.definitions = mainDefinitions;
login.name = 'login';
login.description = 'Login in the server';
module.exports = login;
