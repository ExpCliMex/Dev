function setInteractive() {
  global.interactive = true;
}

function isInteractive() {
  return global.interactive;
}

module.exports = {
  setInteractive,
  isInteractive,
};
