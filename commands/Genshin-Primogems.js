require('dotenv').config({ path: '../.env' });
const { MessageEmbed } = require('discord.js');
const url = process.env.GENSHIN_PRIMO;

module.exports = {
  // the command recognized
  name: 'primogems',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'Genshin Impact free primogems <3',
  // execute function
  execute(message, args) {
    const embed =
      message.member.roles.cache.has('709548901673336922') ||
      message.member.roles.cache.has('797933328186474507') ||
      message.member.roles.cache.has('709627743582552097')
        ? new MessageEmbed()
            .setTitle('Genshin Impact freebies')
            .setDescription('^^ go ^^')
            .setURL(url)
            .setColor(0xff0000)
            .setThumbnail('https://genshin.poporing.life/apple-icon-200-v2.png')
        : //   .setImage(autobots_vatar);
          new MessageEmbed()
            .setTitle('Genshin Impact freebies')
            .setDescription('^^^ go go ')
            .setURL(
              'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaiLMIKxBe34Z-usX-OJC7gsHnJZNg_2wvqkAIShCfi3UD6_BmRyZ3X_JLgO_6Vm9rWAtAg3rK8-k5/pubhtml?gid=0&single=true'
            )
            .setColor(0xff0000)
            .setThumbnail(
              'https://genshin.poporing.life/apple-icon-200-v2.png'
            );
    //   .setImage(autobots_vatar);
    // return message.channel.send(embed);
    return message.author.send(embed);
  },
};

// 797933328186474507 // Genshin role id
// 709627743582552097// premium noodlez id
// 709548901673336922 // mods id
