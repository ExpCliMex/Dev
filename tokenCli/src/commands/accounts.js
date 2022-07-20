const commandLineArgs = require('command-line-args');
const {
  showUnknownCommandError,
  showMissingCommandError,
} = require('../lib/showError');
const { getDefaultAccount } = require('../lib/accounts');
const { login, logout, balance } = require('./accounts/index');
const { generateCommandUsage } = require('../lib/helpText');

const name = 'account';
const description = 'Main account actions';

const mainDefinitions = [
  {
    name: 'command',
    defaultOption: true,
  },
];
const content = [
  {
    name: login.name,
    summary: login.description,
  },
  {
    name: logout.name,
    summary: logout.description,
  },
  {
    name: balance.name,
    summary: balance.description,
  },
];

async function account(args) {
  const mainCommand = commandLineArgs(mainDefinitions, {
    stopAtFirstUnknown: true,
    argv: args,
  });
  const helpText = generateCommandUsage({
    name,
    description,
    args: mainDefinitions,
    content,
  });
  const argv = mainCommand._unknown || [];
  if (mainCommand.command === 'status') {
    console.log(getDefaultAccount());
  } else if (mainCommand.command === 'balance') {
    await balance(argv);
  } else if (mainCommand.command === 'login') {
    await login(argv);
  } else if (mainCommand.command === 'logout') {
    logout(argv);
  } else {
    if (typeof mainCommand.command === 'undefined') {
      showMissingCommandError({
        showHelp: true,
        helpText,
      });
    } else {
      showUnknownCommandError({
        command: mainCommand.command,
        showHelp: true,
        helpText,
      });
    }
  }
}

account.description = description;
account.definitions = mainDefinitions;
account.content = content;
module.exports = account;
