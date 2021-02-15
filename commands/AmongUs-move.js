const { Guild, GuildMember } = require('discord.js');

module.exports = {
  // the command recognized
  name: 'amongmove',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'among us room move',
  // execute function
  execute(message, args) {
    if (!message.mentions.users.first()) {
      return message.reply("Can't move someone without a name");
    }
    const memba = message.mentions.users.first();
    // message.reply("i'm gonna move you " + memba);
    memba.voice.setChannel('741382265942311093');
    // https://stackoverflow.com/questions/46514427/move-user-into-channel-discord-js
    // https://stackoverflow.com/questions/46567466/move-mentioned-user-from-one-voice-channel-to-another-discord-js?rq=1
  },
};
