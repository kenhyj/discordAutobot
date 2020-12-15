module.exports = {
  // the command recognized
  name: 'babyshark',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'text sings you one line of the baby shark song',
  // execute function
  execute(message, args) {
    message.reply(
      '♫ Baby shark, doo doo doo doo doo doo~ ♪ Baby shark, doo doo doo doo doo doo \n !play baby shark'
    );
  },
};
