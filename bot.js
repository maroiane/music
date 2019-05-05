const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "~"
const Util = require('discord.js');
 
 
 
client.on('ready', () => {


console.log('bot is ready');
client.user.setGame(` |*help|*invite`,"https://www.twitch.tv/mixo")






  console.log('-1--2--3---4--');
  console.log('-Bot Is Online-')
  console.log('-1--2---3---4--')
  console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
   console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log(`--بسم الله و الله اكبر--`);
});
 
  client.on('message', message => {
  if (message.content.startsWith("*avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});
////////////
 
/////////////
client.login(process.env.BOT_TOKEN)
