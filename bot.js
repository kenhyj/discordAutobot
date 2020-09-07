require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
// const Canvas = require('canvas'); // https://discordjs.guide/popular-topics/canvas.html#setting-up-canvas
// const { connect } = require('mongoose'); // https://www.youtube.com/watch?time_continue=10&v=YhBKn4GjdUE&feature=emb_title&ab_channel=FykoPK
// const QueueModel = require('./models/Queue');

const {
  PREFIX,
  jokes,
  texts,
  staticpics,
  directedmeme,
} = require('./constants');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// this will return the text memes listed above.
// you must have the PREFIX in front of the command
client.on('message', (message) => {
  // terminates if PREFIX isn't in the beginning. it's faster with this on there.
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  // https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments
  // Create an args variable that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  // Create a command variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array (so that you don't have the command name string inside the args array).
  const commands = args.shift().toLowerCase();
  // directed memes + image
  for (const k in directedmeme) {
    // if (message.content.toLowerCase().startsWith(PREFIX + k)) {
    if (commands === k) {
      const user = message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
        .setColor(0xffffff)
        .setTitle(directedmeme[k].title)
        .setAuthor('@' + user.username)
        .setImage(directedmeme[k].src || user.avatarURL())
        .setFooter('from ' + message.author.username);
      message.channel.send(avatarEmbed);
      return; // reduces slowness
    }
  }
  // nondirected memes + image
  for (const kei in staticpics) {
    if (commands === kei) {
      const embed = new MessageEmbed()
        .setTitle(staticpics[kei].title)
        .setColor(0xff0000)
        // .setDescription(staticpics[kei].description)
        .setImage(staticpics[kei].src);
      message.channel.send(embed);
      return;
    }
  }
  // text memes
  for (const key in texts) {
    if (commands === key) {
      message.reply(texts[key]);
      return; // reduces slowness
    }
  }
  // tell me a joke
  if (commands === 'joke') {
    const numjokes = jokes.length - 1;
    const jokenumero = Math.floor(Math.random() * numjokes);
    message.reply(jokes[jokenumero]);
    return;
  }
  //====================================================================================================
  // EFFECT: among us queue system. Only will work in a specific channel id in Udonz's discord channel.
  // type in discord to get discord channel id: \#ChannelName
  // type in discord to get discord roles id. : \@rolename
  // if (
  //   // message.channel.id === ('749065478265241621' || '745802154027122729') &&
  //   commands === 'qamongus'
  // ) {
  //   if (!args.length) {
  //     // return
  //     message.reply('queue list - work in progress. Thank you.');
  //     return;
  //   }
  //   // queue management for the Execs
  //   // Mods id : <@&709548901673336922> // admin id: <@&709143778786672681> // udonz roles id: <@&709627743582552097>
  //   if (
  //     message.member.roles.cache.find(
  //       (roles) =>
  //         roles.id === '709548901673336922' ||
  //         '70914377878667268' ||
  //         '70962774358255209'
  //     )
  //   ) {
  //     // get list of commands for the admin's queue system
  //     if (args[0].toLowerCase() === 'commands') {
  //       message.reply(
  //         '!qamongus: get the queue list \n !qamongus transfer: transfers to top of queue to in game \n !qamongus kick @user: kicks the mentioned user off of the queue \n !qamongus clear all: purges the entire queue list \n !qamongus join: join the queue \n !qamongus out: self expulsion of the queue'
  //       );
  //       return;
  //     }
  //     // supposedly transfers top of the queue to voice channel / game
  //     if (args[0].toLowerCase() === 'next') {
  //       message.reply('next - work in progress. Thank you.');
  //       return;
  //     }
  //     // kick mentioned user off of the queue
  //     if (args[0].toLowerCase() === 'kick') {
  //       const user = message.mentions.users.first() || message.author;
  //       message.reply('kick - work in progress. Thank you.');
  //       return;
  //     }
  //     // clears the queue list for the next use.
  //     if (
  //       args[0].toLowerCase() === 'clear' &&
  //       args[1].toLowerCase() === 'all'
  //     ) {
  //       message.reply('clear all - work in progress. Thank you.');
  //       return;
  //     }
  //   }
  //   // anyone can join the queue
  //   if (args[0].toLowerCase() === 'join') {
  //     message.reply('join - work in progress. Thank you.');
  //     return;
  //   }
  //   // they boot themself out of the queue
  //   if (args[0].toLowerCase() === 'out') {
  //     message.reply('out - work in progress. Thank you.');
  //     return;
  //   }
  //   // returns list of commands for the queue
  //   if (args[0].toLowerCase() === 'commands') {
  //     message.reply(
  //       '!qamongus join: join the queue \n !amongus out: self expulsion of the queue'
  //     );
  //     return;
  //   }
  //   // return
  //   message.reply('work in progress. Thank you.');
  //   return;
  // }
  // ======================================================================================================
  // put this last, it will tell commands don't exist
  message.reply(
    "Such commands doesn't exist for Autobots. Refer to #bot-commands"
  );
});

// async () => {
//   await connect('mongodb://localhost/mongodb-demo', {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   });
//   return client.login(TOKEN);
// };

client.login(process.env.DISCORD_TOKEN);
