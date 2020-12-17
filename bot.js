// this is the main file.
require('dotenv').config();
const { Client, MessageEmbed, Collection } = require('discord.js');
// const Discord = require('discord.js');
const client = new Client();

// const Canvas = require('canvas'); // https://discordjs.guide/popular-topics/canvas.html#setting-up-canvas

// command handling : https://discordjs.guide/command-handling/#individual-command-files
const fs = require('fs'); // https://www.youtube.com/watch?v=MiGBKhFtMtI&list=PLeLrvnqwEnOasx86ozE-cdf1JagGcUlRf&index=5&ab_channel=NerdCaveDevelopment

client.commands = new Collection();

const commandFiles = fs
  .readdirSync('./commands') // folder commands
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

const {
  PREFIX,
  MODS_ID,
  ADMINS_ID,
  GODS_ID,
  CHANNEL_ID_AMONG,
  CHANNEL_ID_TEST,
} = require('./constants');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// this will return the text memes listed above.
// you must have the PREFIX in front of the command
client.on('message', async (message) => {
  // terminates if PREFIX isn't in the beginning. it's faster with this on there.
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  // https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments
  // Create an args variable that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  // Create a command variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array (so that you don't have the command name string inside the args array).
  const cmd = args.shift().toLowerCase();

  // supposedly returns every single commands autobot can handle.
  // warning do not use "help" because every single other bots uses this command and it gets annoying
  // if (cmd == "commands") {
  //   client.commands.get(command.name,command.description);
  // }

  // if list of commands is not there just don't bother.
  if (!client.commands.has(cmd)) return;

  try {
    client.commands.get(cmd).execute(message, args);
  } catch (error) {
    console.error(error); // this is okay. it shows on the editor terminal
    // message.reply('Autobots do not compute that command!'); // this could get awfully annoying later on.
    // reason for annoyance: multiple bots inserted but not all share the same set of commands
  }
});
client.login(process.env.DISCORD_TOKEN);
