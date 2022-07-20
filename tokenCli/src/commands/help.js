const commandLineArgs = require('command-line-args');
const { generateCommandUsage } = require('../lib/helpText');
const { generateGeneralUsage } = require('./help/index');

const mainDefinitions = [
  {
    name: 'command',
    defaultOption: true,
    description: 'Show help for command',
  },
];

function help(argv, commands) {
  const mainCommand = commandLineArgs(mainDefinitions, {
    partial: true,
    argv,
  });
  const helpCommand = mainCommand.command;
  if (helpCommand) {
    const command = commands.find((command) => command.name === helpCommand);
    if (command) {
      return console.log(
        generateCommandUsage({ ...command, args: command.definitions })
      );
    }
    console.log('Unknown command: %s', helpCommand);
  }
  console.log(generateGeneralUsage(commands));
}

help.name = 'help';
help.description = 'Shows this help';
help.definitions = mainDefinitions;
help.content = [];

module.exports = {
  help,
};
