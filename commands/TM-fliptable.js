module.exports = {
  // the command recognized
  name: 'fliptable',
  // description property is optional, but will be useful for the dynamic help command we'll be covering later.
  description: 'text sings you one line of the baby shark song',
  // execute function
  execute(message, args) {
    message.reply('(┛◉Д◉)┛彡┻━┻');
  },
};
