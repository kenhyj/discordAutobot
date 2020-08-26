// tutorial: https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b

// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// EFFECT: Text Commands Replies with texts.
client.on('message', (msg) => {
  if (msg.content === '!fliptable') {
    msg.reply('(┛◉Д◉)┛彡┻━┻');
  } else if (msg.content === '!babyshark') {
    msg.reply(
      '♫ Baby shark, doo doo doo doo doo doo~ ♪ Baby shark, doo doo doo doo doo doo \n !play baby shark'
    );
  } else if (msg.content === '!transformers') {
    msg.reply('♪robots in disguise~');
  }
});

client.login(process.env.DISCORD_TOKEN);
