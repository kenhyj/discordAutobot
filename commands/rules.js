const rules =
  '\n• No excessive Profanity / Slurs\n• Zero tolerance for NSFW / NSFL content / discussions. (includes usernames and avatars)\n• Be respectful to others\n• No Advertisements or promotions of any kind in this server or in DMs, this includes Discord servers, social media, content channels etc\n• English is the main language in this server - please refrain from using other languages\n• No bullying\n• Keep it Drama Free\n• Avoid controversial/political topics\n• Use Common Sense.\n';

module.exports = {
  // the command recognized
  name: 'rules',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'list the rules of your (Udonz) discord channel',
  // execute function
  execute(message, args) {
    message.reply(rules);
  },
};
