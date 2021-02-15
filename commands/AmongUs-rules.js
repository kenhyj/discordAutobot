const rules =
  "\n 1. DO NOT SHARE THE CODE! \n 2. mic is required for Among Us \n 3. Redeem a ticket using your twitch points in udonz's twitch \n 4. please have twitch name and discord name identical so it will be easier for us to identify you! \n 5. join the waiting room in discord voice chat \n 6. please mute and minimize stream prior to playing \n 7. discussion is only available during meetings \n 8. enjoy the game!";

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
