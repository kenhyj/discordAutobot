# Autobot - Discord bot

## To run changes to Autobot,

For the first time:

```bash
$ npm install
```

after that:

```bash
$ node bot.js
```

if you want to see any changes: Control+C
then

```bash
$ node bot.js
```

## Deploy to Heroku

the only thing you need is .env file
with the following:

```bash
DISCORD_TOKEN=YOUR_TOKEN_HERE
```

## About

Author: kenhyj

### Commands:

#### Text Reply

Upper-lower cases have been made negligible. # of spaces between words do not matter.

- _!babyshark_ : answers with "Baby shark, doo doo doo doo doo doo~ Baby shark, doo doo doo doo doo doo \n !play baby shark"
- _!fliptable_ : answers with "┛◉Д◉)┛ 彡 ┻━┻"
- _!transformers_ : answers with "robots in disguise"
- _!drtin~_ : answers with "Good enough for me♡"
- _!joke_: tells a transformer joke
- _!amongusrules_: lists rules and important notes regarding Udonz's discord "Among Us" twitch play.

#### Embed Reply

Upper-lower cases have been made negligible. # of spaces between words do not matter.

- _!sloppy_ _@username_: answers with Sloppy Sloppy Sloppy embed with the mentioned user's username and avatar. If the username is invalid or empty, it will default to the author of this message.
- _!stewiesubs_ _@username_: answers with "Where's my sub, man" embed with the mentioned user's username. If the username is invalid or empty, it will default to the author of this message. The image is of Stewie beating the dying life out of Brian the dog.
- _!amongkill#_ _@username_: answers with "Where's my sub, man" embed with the mentioned user's username. If the username is invalid or empty, it will default to the author of this message. The image is a Among Us game mascot killing another mascot. when it's stab kill when #=1, shot kill when #=2, snap kill when #=3.
- _!pepecry_ : returns with a pepe crying gif
- _!licky_ : returns with a Oreimo protagonist licking lewd gif
- _!facepalm_ : returns with a Sokka (Avatar last airbender) facepalming gif.

#### Among Us Queue (MongoDB) (Work in Progress)

Upper-lower cases have been made negligible. # of spaces between words do not matter. <br />
For now this queue is being developed for exclusive use of Udonz's discord channel. However, with coding knowledge, it can be tweaked to your needs. <br />
!qgame commands: returns list of all available queue commands and its functions for the among us game.

### Credits and help:

tutorial 1: https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b <br />
tutorial 2: https://medium.com/davao-js/v2-tutorial-deploy-your-discord-bot-to-heroku-part-2-9a37572d5de4 <br />
tutorial 3: https://github.com/renesansz/discord-greeter-bot/issues/252 <br />

easing if statements and messy code: https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments <br />
faqs: https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/frequently-asked-questions.md <br />
queue via mongodb: https://www.youtube.com/watch?time_continue=10&v=YhBKn4GjdUE&feature=emb_title&ab_channel=FykoPK <br />
use of roles: https://stackoverflow.com/questions/45317305/find-out-if-someone-has-a-role <br />
<br />
tba: https://aister.gitbooks.io/discord-js-command-handlers/content/basic-if-else-block.html <br />
