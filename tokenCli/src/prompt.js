const { exit } = require('./commands/exit');
const { version } = require('./commands/version');
const { help } = require('./commands/help');
const account = require('./commands/accounts');
const work = require('./commands/work');
const { parseArgsStringToArgv } = require('string-argv');
const commandLineArgs = require('command-line-args');
const inquirer = require('inquirer');
const { generateCommandUsage } = require('./lib/helpText');

const commands = {
  version,
  help,
  account,
  work,
};

const questions = [
  {
    type: 'input',
    name: 'line',
    message: '> ',
  },
];

const mainDefinitions = [
  {
    name: 'command',
    defaultOption: true,
  },
  { name: 'help', alias: 'h', type: Boolean },
];

async function runCommand(argv) {
  if (global.interactive) {
    commands['exit'] = exit;
  }
  const commandHelp = Object.values(commands).map((command) => ({
    name: command.name,
    description: command.description,
    definitions: command.definitions,
    content: command.content,
  }));
  const mainOptions = commandLineArgs(mainDefinitions, {
    stopAtFirstUnknown: true,
    argv,
  });
  const args = mainOptions._unknown || [];
  const command = mainOptions.command;
  const commandFunction = commands[command];
  if (typeof commandFunction !== 'undefined') {
    if (mainOptions.help) {
      return console.log(
        generateCommandUsage({
          name: commandFunction.name,
          description: commandFunction.description,
          args: commandFunction.definitions || [],
          content: commandFunction.content || [],
        })
      );
    }
    await commandFunction(args, commandHelp);
  } else if (typeof command !== 'undefined') console.log('Comando inválido');
  else console.log('Ingrese un comando');
}

async function interactivePrompt() {
  const answers = await inquirer.prompt(questions);
  const line = answers.line;
  const input = line.trim();
  const args = parseArgsStringToArgv(input);
  await runCommand(args, true);
  return interactivePrompt();
}

async function staticPrompt(argv) {
  await runCommand(argv, false);
}

module.exports = {
  interactivePrompt,
  staticPrompt,
};
