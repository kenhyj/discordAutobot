// const mongoose = require('mongoose'); // https://www.youtube.com/watch?time_continue=10&v=YhBKn4GjdUE&feature=emb_title&ab_channel=FykoPK
const QueueModel = require('../models/Queue');

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

// mongoose.connect(process.env.DB_CONNECTION_KEN, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
//   console.log('mongoose is connected');
// });
