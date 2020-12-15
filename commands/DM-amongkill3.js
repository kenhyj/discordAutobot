const { dmTemplate } = require('../constants');

const memename = 'amongkill3'; // the name of the meme here

module.exports = {
  // the command recognized
  name: memename,
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: memename + ' directed meme.',
  // execute function
  execute(message, args) {
    const avatarEmbed = dmTemplate(memename, message);
    return message.channel.send(avatarEmbed);
  },
};
