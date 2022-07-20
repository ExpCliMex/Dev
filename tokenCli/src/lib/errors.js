function getUnknownCommandError({ command }) {
  return `Comando desconocido: ${command}`;
}

function getUnknownOptionError({ option }) {
  return `Unknown option: ${option}`;
}

module.exports = {
  getUnknownCommandError,
  getUnknownOptionError,
};
