require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const PREFIX = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// tell me a joke
const jokes = [
  'My girlfriend told me she was leaving me because I keep pretending to be a Transformer, I said, "No, wait! I can change."',
  'Which transformer fell down the stairs? Stumblebee.',
  "I was talking to Bumblebee the Transformer the other day...  I didn't realize he was such a car guy",
  'Do Transformers get car insurance or health insurance? Neither, they are illegal aliens.',
  'What do you call an LGBTQ+ Transformer? Optimus Pride.',
  'The Transformer formerly known as RoboCop...Stoptimus Crime',
  'Just got back from the Transformers convention and boy are my arms tires.',
  'What do you get when Wonder Woman has sex with a transformer? Amazon Prime',
  'What do you call a cheery positive transformer? Optimistic Prime.',
  'My girlfriend threatened to break-up with me if I didn\'t stop acting like a Transformer...I said "but baby, I can change!"',
  'What do you call a Flying Transformer Robots in da skies',
  'If Caitlyn Jenner were to revert back to being male, she would be... ...a TransFormer',
  "What do you call a robot that isn't trans anymore? Transformer",
  'What transformer loves to paint? Optimus Primer',
  'Guy: I\'m writing "Transformers": a crossover fanfic where Othello encounters Sauron...\n Other guy: "why\'s it called "Transformers"?" \n Guy: Moor then meets The Eye',
  'What shoes do Transformers wear? Vans.',
  'What is a millennial rapper’s favorite Transformer? Mumblebee',
  'What do you call a transformer that believes things will work out fine? Optimist Prime.',
  "What do you call transformer's father and mother? Transparent",
  "Transformers: More than meets the eye. Trans-formers: your mom's now a guy.",
  'What happened to the Transformer that ate poorly prepared food? It came down with Autobotulism.',
  'What do you call a Transformer that engages in illegal activities? Optimus *Crime*.',
  '2 Transformers got married. \n Soon thereafter, they had a baby Transformer. But at that moment when they had a baby, they suddenly could not be seen anymore. \n They had become Transparents.',
  'I turned into a transformer last night... And boy are my arms tires',
  'What do you call a Mongol holding a Transformer? A Decepti-Khan',
  "Did you hear about the transformer who lost his ability to change into a seven-sided shape? He's a de-septagon.",
  'What do you call a Transformer who always sees the glass as half full? Optimist Prime',
  'When Transformers was filmed in Detroit, Michael Bay had to use CGI to repair buildings',
  'A Transformer Baby! \n Few Kids and a pregnant lady was standing at Bus stop..\n kid: "What are you expecting?" \n The girl says, "A bus." \n The kid turns to his friend and says: "Wow! I am 100% sure this chick got screwed by a Transformer',
  "Why aren't there any baby Transformers? Because Auto-Bots pull out!",
  'I just saw Bumblebee yesterday and I have to say, the difference in quality from it to the previous Transformers movies is Knight and Bay.',
  'Name an X-Man that is also a Transformer. Bruce Jenner',
];

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
  // tell me a joke
  if (message.content === PREFIX + 'joke') {
    const numjokes = jokes.length - 1;
    const jokenumero = Math.floor(Math.random() * numjokes);
    message.reply(jokes[jokenumero]);
    return;
  }
  message.reply("Such commands doesn't exist. Refer to #bot-commands");
});

client.login(process.env.DISCORD_TOKEN);
