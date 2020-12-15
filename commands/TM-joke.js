// this is the list of jokes.
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
  'Optimus Prime, was there an Autobutt named Gluteus Maximus?',
];

module.exports = {
  // the command recognized
  name: 'joke',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'Gives you a joke listed above randomly',
  // execute function
  execute(message, args) {
    const numjokes = jokes.length - 1;
    const jokenumero = Math.floor(Math.random() * numjokes);
    message.reply(jokes[jokenumero]);
  },
};
