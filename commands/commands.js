const { MessageEmbed } = require('discord.js');
// const autobots_vatar = require('../autobots.png');

module.exports = {
  // the command recognized
  name: 'commands',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'Command List for Autobot',
  // execute function
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle('Autobot Commands List')
      .setDescription('Click the link above to see the list of commands')
      .setURL('https://github.com/kenhyj/discordAutobot#Commands')
      .setColor(0xff0000)
      .setThumbnail('https://cdn.wallpapersafari.com/14/17/g43sp7.png');
    //   .setImage(autobots_vatar);
    return message.channel.send(embed);
  },
};
