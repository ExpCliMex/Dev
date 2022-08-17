const commandLineArgs = require('command-line-args');
const { loginRequired } = require('../../constants/permissions');
const { getDefaultAccountBalance } = require('../../lib/accounts');
const { loginDefinitions, helpDefinition } = require('../../lib/definitions');
const { getUnknownOptionError } = require('../../lib/errors');
const { generateCommandUsage } = require('../../lib/helpText');

const name = 'balance';
const description = 'Get account balance';
const definitions = [...loginDefinitions, helpDefinition];

async function balance(argv) {
  const mainCommand = commandLineArgs(loginDefinitions, {
    stopAtFirstUnknown: true,
    argv,
  });
  const { password, address } = mainCommand;
  const unknown = mainCommand._unknown || [];
  const helpText = generateCommandUsage({
    name,
    description,
    args: definitions,
  });
  if (unknown.length > 0) {
    getUnknownOptionError({ option: unknown[0] });
    return console.log(helpText);
  }
  if (mainCommand.help) return console.log(helpText);
  await loginRequired(
    async () => {
      const balance = await getDefaultAccountBalance();
      console.log(balance);
    },
    { password, address }
  );
}

balance.name = name;
balance.description = description;
balance.definitions = definitions;

module.exports = balance;
