const { staticPrompt, interactivePrompt } = require('./prompt');
const init = require('./lib/init');
const commandLineArgs = require('command-line-args');
const { setInteractive } = require('./lib/interactive');

const optionDefinitions = [
  {
    name: 'interactive',
    alias: 'i',
    type: Boolean,
  },
];
const mainOptions = commandLineArgs(optionDefinitions, { partial: true });
init().then(() => {
  if (mainOptions.interactive) {
    setInteractive();
    interactivePrompt();
  } else {
    const argv = mainOptions._unknown || [];
    staticPrompt(argv);
  }
});
