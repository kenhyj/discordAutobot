require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
// const Canvas = require('canvas'); // https://discordjs.guide/popular-topics/canvas.html#setting-up-canvas
// const mongoose = require('mongoose'); // https://www.youtube.com/watch?time_continue=10&v=YhBKn4GjdUE&feature=emb_title&ab_channel=FykoPK
// const QueueModel = require('./models/Queue');

const {
  PREFIX,
  MODS_ID,
  ADMINS_ID,
  GODS_ID,
  CHANNEL_ID_AMONG,
  CHANNEL_ID_TEST,
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
client.on('message', async (message) => {
  // terminates if PREFIX isn't in the beginning. it's faster with this on there.
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  // https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments
  // Create an args variable that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  // Create a command variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array (so that you don't have the command name string inside the args array).
  const commands = args.shift().toLowerCase();
  // directed memes + image
  for (const k in directedmeme) {
    if (commands === k) {
      const user = message.mentions.users.first() || message.author;
      const avatarEmbed = new MessageEmbed()
        .setColor(0xffffff)
        .setTitle(directedmeme[k].title)
        .setAuthor('@' + user.username)
        .setImage(directedmeme[k].src || user.avatarURL())
        .setFooter('from ' + message.author.username);
      return message.channel.send(avatarEmbed);
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
      return message.channel.send(embed);
    }
  }
  // text memes
  for (const key in texts) {
    if (commands === key) {
      return message.reply(texts[key]);
    }
  }
  // tell me a joke
  if (commands === 'joke') {
    const numjokes = jokes.length - 1;
    const jokenumero = Math.floor(Math.random() * numjokes);
    return message.reply(jokes[jokenumero]);
  }
  //====================================================================================================
  // EFFECT: among us queue system. Only will work in a specific channel id in Udonz's discord channel.
  // type in discord to get discord channel id: \#ChannelName
  // type in discord to get discord roles id. : \@rolename
  // if (
  //   // message.channel.id === (CHANNEL_ID_AMONG || CHANNEL_ID_TEST) &&
  //   commands === 'qgame'
  // ) {
  //   if (!args.length) {
  //     // return
  //     // const req = await QueueModel.findById(message.author.username);
  //     return message.reply('queue list - work in progress. Thank you.');
  //   }
  //   // anyone can join the queue. help : https://stackoverflow.com/questions/40102372/find-one-or-create-with-mongoose
  //   // TODO: the date is coming out null.
  //   if (args[0].toLowerCase() === 'join') {
  //     let timenow = new Date();
  //     const req = await QueueModel.findOneAndUpdate(
  //       { _id: message.author.username },
  //       { timestamp: timenow },
  //       {
  //         new: true,
  //         upsert: true,
  //       }
  //     );
  //     return !req
  //       ? message.reply(
  //           'Some thing went wrong. Plz try again or contact the admins and God'
  //         )
  //       : message.reply(
  //           `${message.author.username} joined the queue on ${timenow}`
  //         );
  //   }
  //   // anyone can boot themself out of the queue (that is if they are in the queue)
  //   if (args[0].toLowerCase() === 'out') {
  //     // const req = await QueueModel.findByIdAndDelete(message.author.username);
  //     return message.reply(
  //       'Sorry to see you leave. You are out of the queue. Thank you.'
  //     );
  //   }

  //   // queue management for the Execs
  //   if (
  //     message.member.roles.cache.find(
  //       (roles) => roles.id === MODS_ID || ADMINS_ID || GODS_ID
  //     )
  //   ) {
  //     // get list of commands for the admin's queue system
  //     if (args[0].toLowerCase() === 'commands') {
  //       return message.reply(
  //         '\n !qgame: returns your position in queue \n !qgame transfer: transfers to top of queue to in game \n !qgame kick @user: kicks the mentioned user off of the queue \n !qgame clear all: purges the entire queue list \n !qgame join: join the queue \n !qgame out: self expulsion of the queue'
  //       );
  //     }
  //     // tells you who's next
  //     if (args[0].toLowerCase() === 'next') {
  //       const req = await QueueModel.findOne({});
  //       return !req
  //         ? message.reply(`Queue is M T !`)
  //         : message.reply(`Next is: ${req._id}!`);
  //     }
  //     // moves the queue down
  //     if (args[0].toLowerCase() === 'shift') {
  //       await QueueModel.deleteOne({});
  //       return message.reply('shift - work in progress. Thank you.');
  //     }
  //     if (args[0].toLowerCase() === 'kick') {
  //       // TODO: kick mentioned user off of the queue
  //       const user = message.mentions.users.first();
  //       if (!user) {
  //         return message.reply('kick who? pfftt Humans.');
  //       }
  //       const req = QueueModel.findByIdAndDelete({ user });
  //       return !req
  //         ? message.reply(`${user} can't be kicked. Was never in the queue`)
  //         : message.reply(`${user} is not in the queue`);
  //     }
  //     // clears the queue list for the next use.
  //     if (
  //       args[0].toLowerCase() === 'clear' &&
  //       args[1].toLowerCase() === 'all'
  //     ) {
  //       await QueueModel.deleteMany({});
  //       return message.reply('clear the game queue. Thank you.');
  //     }
  //   }
  //   // end of execs queue management.

  //   // returns list of commands for the queue
  //   if (args[0].toLowerCase() === 'commands') {
  //     return message.reply(
  //       '\n !qgame: returns position in queue \n !qgame join: join the queue \n !qgame out: self expulsion of the queue'
  //     );
  //   }
  //   // return
  //   return message.reply('work in progress. Thank you.');
  // }
  // ======================================================================================================
  // put this last, it will tell commands don't exist
  message.reply(
    "Such commands doesn't exist for Autobots. Refer to #bot-commands"
  );
});

// mongoose.connect(process.env.DB_CONNECTION_KEN, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
//   console.log('mongoose is connected');
// });

client.login(process.env.DISCORD_TOKEN);
