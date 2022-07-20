const commandLineArgs = require('command-line-args');
const { isLoggedIn } = require('../../constants/permissions');
const { clearSession } = require('../../lib/session');
const { isInteractive } = require('../../lib/interactive');
const { helpDefinition } = require('../../lib/definitions');
const { getUnknownOptionError } = require('../../lib/errors');
const { generateCommandUsage } = require('../../lib/helpText');

const name = 'logout';
const description = 'Stop connection in the ethereum network';
const definitions = [helpDefinition];

function logout(argv) {
  if (!isInteractive())
    return console.log('Command available only in interactive mode');
  const loginCommand = commandLineArgs(definitions, {
    stopAtFirstUnknown: true,
    argv,
  });
  const unknown = loginCommand._unknown || [];
  const helpText = generateCommandUsage({
    name,
    description,
    args: definitions,
  });
  if (unknown.length > 0) {
    console.log(getUnknownOptionError({ option: unknown[0] }));
    return console.log(helpText);
  }
  if (loginCommand.help) return console.log(helpText);
  if (!isLoggedIn()) return console.log('You must be logged in');
  clearSession();
  console.log('Logout successful');
}

logout.name = name;
logout.description = description;
logout.definitions = definitions;

module.exports = logout;
