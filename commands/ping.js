// tutorial: https://discordjs.guide/command-handling/#individual-command-files
module.exports = {
  name: 'ping',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'Ping!',
  // execute function
  execute(message, args) {
    message.channel.send('Pong.');
  },
};
