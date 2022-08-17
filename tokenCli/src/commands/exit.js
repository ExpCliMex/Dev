function exit() {
  console.log('Saliendo...');
  process.exit();
}

exit.name = 'exit';
exit.description = 'Stops the interactive console';

module.exports = {
  exit,
};
