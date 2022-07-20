const { getUnknownCommandError } = require('./errors');

function showUnknownCommandError ({ command, showHelp = false, helpText }) {
  if (showHelp && !helpText) {
    throw new Error('helpText is missing');
  }
  console.log(getUnknownCommandError({ command }));
  if (showHelp) console.log(helpText);
}

function showMissingCommandError ({ showHelp = false, helpText }) {
  if (showHelp && !helpText) {
    throw new Error('helpText is missing');
  }
  console.log('Ingrese un comando');
  if (showHelp) console.log(helpText);
}

module.exports = {
  showUnknownCommandError,
  showMissingCommandError
};
