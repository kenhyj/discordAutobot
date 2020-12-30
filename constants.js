// debugging: https://stackoverflow.com/questions/50426635/exporting-importing-in-node-js-discord-js
const { MessageEmbed } = require('discord.js');

const PREFIX = '!'; // this is how autobot knows you are calling for a command

// type in discord to get discord channel id: \#ChannelName
// type in discord to get discord roles id. : \@rolename
const MODS_ID = '709548901673336922';
const ADMINS_ID = '709143778786672681';
const GODS_ID = '709627743582552097';
const CHANNEL_ID_TEST = '745802154027122729';
const CHANNEL_ID_AMONG = '749065478265241621';

// Add list of gifs of attachments memes here:
const staticpics = {
  pepecry: {
    title: 'Crying Pepe',
    src:
      'https://media1.tenor.com/images/f550faf07f1493f22e1daf93568eadd3/tenor.gif',
  },
  licky: {
    title: 'Lick~',
    src:
      'https://media1.tenor.com/images/24c30256238052c38a45bdd94cb06a9d/tenor.gif',
  },
  facepalm: {
    title: 'facepalm',
    src: 'https://media.giphy.com/media/yfjk76P5Ex9y8/source.gif',
  },
  divorcelawyer: {
    title: 'need a divorce lawyer?',
    src:
      'https://i.pinimg.com/564x/8c/23/b5/8c23b59b68b6e8f62869b7ca252c863d.jpg',
  },
};

// non directed memes embed template is here.
function ndmTemplate(memename) {
  const embed = new MessageEmbed()
    .setTitle(staticpics[memename].title)
    .setColor(0xff0000)
    // .setDescription(staticpics[kei].description)
    .setImage(staticpics[memename].src);
  return embed;
}

function dmTemplate(memename, message) {
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new MessageEmbed()
    .setColor(0xffffff)
    .setTitle(directedmeme[memename].title)
    .setAuthor('@' + user.username)
    .setImage(directedmeme[memename].src || user.avatarURL())
    .setFooter('from ' + message.author.username);
  return avatarEmbed;
}

// Add list of picture memes here:
const directedmeme = {
  stewiesub: {
    title: "Where's my Sub, man?",
    src: 'https://i.imgur.com/xofJI3A.png',
  },
  sloppy: { title: 'Sloppy Sloppy Sloppy', src: false },
  shame: {
    title: 'Game of Thrones. Shame',
    src: 'https://media.giphy.com/media/vX9WcCiWwUF7G/source.gif',
  },
  amongkill1: {
    title: 'Among Us. Kill. Stab',
    src:
      'https://media1.tenor.com/images/3cedee4f8118855c83ea05463498f326/tenor.gif',
  },
  amongkill2: {
    title: 'Among Us. Kill. Shot',
    src:
      'https://media1.tenor.com/images/a0d13ec25f9774f155b6cd5ebf12a6c8/tenor.gif',
  },
  amongkill3: {
    title: 'Among Us. Kill. Snap',
    src:
      'https://media1.tenor.com/images/ef4993b593954811a0c0a1c98af698a3/tenor.gif',
  },
  shame: {
    title: 'Shame Shame Shame',
    src:
      'https://media1.tenor.com/images/b9761b2a3fa6f830ddcafc4ee5629527/tenor.gif',
  },
};

module.exports = {
  PREFIX,
  MODS_ID,
  ADMINS_ID,
  GODS_ID,
  CHANNEL_ID_AMONG,
  CHANNEL_ID_TEST,
  staticpics,
  ndmTemplate,
  dmTemplate,
};
