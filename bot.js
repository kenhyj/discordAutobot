// tutorial 1: https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b
// tutorial 2: https://medium.com/davao-js/v2-tutorial-deploy-your-discord-bot-to-heroku-part-2-9a37572d5de4
// debugging 1:  https://github.com/renesansz/discord-greeter-bot/issues/252

// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Add list of text memes here
const messages = {
  fliptable: '(┛◉Д◉)┛彡┻━┻',
  babyshark:
    '♫ Baby shark, doo doo doo doo doo doo~ ♪ Baby shark, doo doo doo doo doo doo \n !play baby shark',
  transformers: '♪robots in disguise~',
  'drtin~': 'Good enough for me♡',
  'tin-tsk': 'Sloppy Sloppy Sloppy',
};

// this will return the text memes listed above.
// you must have ! in front of the command
client.on('message', (msg) => {
  for (const key in messages) {
    if (msg.content === '!'.concat(key)) {
      msg.reply(messages[key]);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
