const { loginRequired } = require('../constants/permissions');
const commandLineArgs = require('command-line-args');
const doWork = require('./work/index');
const { loginDefinitions, helpDefinition } = require('../lib/definitions');

const optionDefinitions = [...loginDefinitions, helpDefinition];

async function work(args) {
  const mainCommand = commandLineArgs(optionDefinitions, {
    partial: true,
    argv: args,
  });
  await loginRequired(doWork, {
    address: mainCommand.address,
    password: mainCommand.password,
  });
}

work.name = 'work';
work.description = 'Start mining work';
work.definitions = optionDefinitions;

module.exports = work;
