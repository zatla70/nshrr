
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`


[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`


[${member}]**`);


  });



Client.login(process.env.BOT_TOKEN));
