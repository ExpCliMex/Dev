const chalk = require('chalk');
const figlet = require('figlet');
const commandLineUsage = require('command-line-usage');
const CLI_DESCRIPTION = 'CLI for interaction and delivery of tokens Ehya Tech';

const HELP_HEADER = `${chalk.yellow(
  figlet.textSync('Ehya Tech CLI', { horizontalLayout: 'full' })
)}
${CLI_DESCRIPTION}
`;

function generateGeneralUsage(commands) {
  const usableCommands = commands.map((command) => ({
    name: command.name,
    description: command.description,
  }));
  const commandsHelp = commandLineUsage([
    {
      header: 'Commands Available',
      content: usableCommands.map((command) => ({
        name: command.name,
        summary: command.description,
      })),
    },
  ]);
  return `${HELP_HEADER}${commandsHelp}`;
}

module.exports = generateGeneralUsage;
