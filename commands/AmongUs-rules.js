const rules =
  '\n 0. Do not share Room Code. We will post it in discord #among-us-discussion \n 1. IN TWITCH, redeem "gaming ticket" using 1 bowl point. \n 2. please have twitch name and discord name identical so it will be easier for us to identify you! \n 3. please have mic enabled so we can communicate verbally! \n 4. join the waiting room in discord voice chat \n 5. please mute and minimize stream prior to playing! \n 6. discussion is only available during meetings \n 7. enjoy the game!';

module.exports = {
  // the command recognized
  name: 'amongusrules',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description:
    'list the rules of your (Udonz) discord channel regarding among us game',
  // execute function
  execute(message, args) {
    message.reply(rules);
  },
};
