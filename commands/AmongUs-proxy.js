const { MessageEmbed } = require('discord.js');
// const autobots_vatar = require('../autobots.png');

module.exports = {
  // the command recognized
  name: 'amongusproxhelp',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'Command List for Autobot',
  // execute function
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle('AmongUs Proximity Chat Help')
      .setDescription(
        'Click the link above for a tutorial on Among Us Proxy installation'
      )
      .setURL('https://github.com/ottomated/CrewLink#installation')
      .setColor(0xff0000)
      .setThumbnail('https://github.com/ottomated/CrewLink/raw/master/logo.png')
      .addFields({
        name: "SteamedArrow's own dedicated server for proximity chat:",
        value: 'https://arrows-crewlink.herokuapp.com/',
        inline: true,
      });
    //   .setImage(autobots_vatar);
    return message.channel.send(embed);
  },
};
