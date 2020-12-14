// Add list of picture memes here:
const directedmeme = {
  stewiesub: {
    title: "Where's my Sub, man?",
    src: 'https://i.imgur.com/xofJI3A.png',
  },
  sloppy: { title: 'Sloppy Sloppy Sloppy', src: false },
  shame: {
    title: 'Game of Thrones. Shame',
    src: 'https://media.giphy.com/media/vX9WcCiWwUF7G/source.gif',
  },
  amongkill1: {
    title: 'Among Us. Kill. Stab',
    src:
      'https://media1.tenor.com/images/3cedee4f8118855c83ea05463498f326/tenor.gif',
  },
  amongkill2: {
    title: 'Among Us. Kill. Shot',
    src:
      'https://media1.tenor.com/images/a0d13ec25f9774f155b6cd5ebf12a6c8/tenor.gif',
  },
  amongkill3: {
    title: 'Among Us. Kill. Snap',
    src:
      'https://media1.tenor.com/images/ef4993b593954811a0c0a1c98af698a3/tenor.gif',
  },
};

// directed memes + image

// for (const k in directedmeme) {
//   if (command === k) {
//     const user = message.mentions.users.first() || message.author;
//     const avatarEmbed = new MessageEmbed()
//       .setColor(0xffffff)
//       .setTitle(directedmeme[k].title)
//       .setAuthor('@' + user.username)
//       .setImage(directedmeme[k].src || user.avatarURL())
//       .setFooter('from ' + message.author.username);
//     return message.channel.send(avatarEmbed);
//   }
// }
