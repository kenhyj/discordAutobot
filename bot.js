// tutorial 1: https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b
// tutorial 2: https://medium.com/davao-js/v2-tutorial-deploy-your-discord-bot-to-heroku-part-2-9a37572d5de4
// debugging 1:  https://github.com/renesansz/discord-greeter-bot/issues/252

// Run dotenv
require('dotenv').config();

// const Discord = require('discord.js');
// const client = new Discord.Client();
// const MessageEmbed = new Discord.MessageEmbed();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = '!';

// Add list of text memes here
const texts = {
  fliptable: '(┛◉Д◉)┛彡┻━┻',
  babyshark:
    '♫ Baby shark, doo doo doo doo doo doo~ ♪ Baby shark, doo doo doo doo doo doo \n !play baby shark',
  transformers: '♪robots in disguise~',
  'drtin~': 'Good enough for me♡',
  pepewhy: 'https://tenor.com/view/pepe-why-pepe-pepehands-crying-gif-12683546',
};

// Add list of gifs of attachments memes here:
const gifs = {
  pepecry: 'https://tenor.com/view/pepe-why-pepe-pepehands-crying-gif-12683546',
  licky: 'https://tenor.com/view/lick-lips-oreimo-anime-gif-12850352',
  shame: 'https://tenor.com/view/shame-game-of-thrones-gif-5547122',
};
// Add list of static picture memes here:
const staticpics = {};

// this will return the text memes listed above.
// you must have the PREFIX in front of the command
client.on('message', (message) => {
  // terminates if PREFIX isn't in the beginning. it's faster with this on there.
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  // this is exclusively for the use of sloppy meme
  if (message.content.toLowerCase().startsWith(PREFIX + 'sloppy')) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
      .setColor(0xffffff)
      .setTitle('Sloppy Sloppy Sloppy')
      .setAuthor('@' + user.username)
      .setImage(user.avatarURL())
      .setFooter('from ' + message.author.username);
    message.channel.send(avatarEmbed);
    return; // reduces slowness
  }
  for (const key in texts) {
    if (message.content.toLowerCase() === PREFIX + key) {
      message.reply(texts[key]);
      return; // reduces slowness
    }
  }
  for (const kay in gifs) {
    if (message.content.toLowerCase() === PREFIX + kay) {
      console.log('typeof message', typeof message);
      console.log('typeof message.content', typeof message.content);
      const embed = new MessageEmbed()
        .setTitle('A slick little embed')
        .setColor(0xff0000)
        .setDescription('Hello, this is a slick embed!')
        // .setImage(message.author.avatarURL());
        .setImage(message.author.avatarURL());
      message.channel.send(embed);
      return;
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
