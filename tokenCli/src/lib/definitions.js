module.exports = {
  loginDefinitions: [
    {
      name: 'address',
      alias: 'a',
      description: 'Ethereum account address',
    },
    {
      name: 'password',
      alias: 'p',
      description: 'Ethereum account password',
    },
  ],
  helpDefinition: {
    name: 'help',
    alias: 'h',
    description: 'Shows this help message',
    type: Boolean,
  },
};
