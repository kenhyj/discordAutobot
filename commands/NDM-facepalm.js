const { ndmTemplate } = require('../constants');

const memename = 'facepalm'; // the name of the meme here

const embed = ndmTemplate(memename);

module.exports = {
  // the command recognized
  name: memename,
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: memename + ' non directed meme.',
  // execute function
  execute(message, args) {
    return message.channel.send(embed);
  },
};
