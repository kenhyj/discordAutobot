require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const PREFIX = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Add list of text memes here
const texts = {
  fliptable: '(┛◉Д◉)┛彡┻━┻',
  babyshark:
    '♫ Baby shark, doo doo doo doo doo doo~ ♪ Baby shark, doo doo doo doo doo doo \n !play baby shark',
  transformers: '♪robots in disguise~',
  'drtin~': 'Good enough for me♡',
};

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
};
// Add list of  picture memes here:
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
};

// this will return the text memes listed above.
// you must have the PREFIX in front of the command
client.on('message', (message) => {
  // terminates if PREFIX isn't in the beginning. it's faster with this on there.
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  // directed memes + image
  for (const k in directedmeme) {
    if (message.content.toLowerCase().startsWith(PREFIX + k)) {
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
    if (message.content.toLowerCase() === PREFIX + kei) {
      console.log('typeof message', typeof message);
      console.log('typeof message.content', typeof message.content);
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
    if (message.content.toLowerCase() === PREFIX + key) {
      message.reply(texts[key]);
      return; // reduces slowness
    }
  }
  message.reply("Such commands doesn't exist. Refer to #bot-commands");
});

client.login(process.env.DISCORD_TOKEN);
