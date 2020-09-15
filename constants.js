// debugging: https://stackoverflow.com/questions/50426635/exporting-importing-in-node-js-discord-js

const PREFIX = '!';
const MODS_ID = '709548901673336922';
const ADMINS_ID = '709143778786672681';
const GODS_ID = '709627743582552097';
const CHANNEL_ID_TEST = '745802154027122729';
const CHANNEL_ID_AMONG = '749065478265241621';

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
  amongusrules:
    '\n 0. Do not share Room Code. We will post it in discord #among-us-discussion \n 1. type !join in the twitch chat to be entered into the queue. \n 2. please have twitch name and discord name identical so it will be easier for us to identify you! \n 3. please have mic enabled so we can communicate verbally! \n 4. join the waiting room in discord voice chat \n 5. please mute and minimize stream prior to playing! \n 6. discussion is only available during meetings \n 7. enjoy the game!',
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
};

module.exports = {
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
};
