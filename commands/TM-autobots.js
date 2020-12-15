module.exports = {
  // the command recognized
  name: 'autobots',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'Autobots roll out',
  // execute function
  execute(message, args) {
    message.reply('roll out~');
  },
};
