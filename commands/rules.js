const rules =
  '\n-No Profanity / Slurs\n-Be respectful to others\n-Keep it Drama Free\n-Avoid controversial/political topics\n-Have a good time\n-Do not spam for shout outs or followers during live stream!\n';

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
