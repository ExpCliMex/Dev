const commandLineUsage = require('command-line-usage');

function generateCommandUsage({ name, description, args, content }) {
  const usageGroups = [{ header: name, content: description }];
  if (content && content.length > 0)
    usageGroups.push({ header: 'Comandos', content: content });
  if (args && args.length > 0)
    usageGroups.push({ header: 'Opciones', optionList: args });
  return commandLineUsage(usageGroups);
}

module.exports = {
  generateCommandUsage,
};
