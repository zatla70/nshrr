
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`
السلام عليكم
حياك الله. في سيرفر IQ. 
وجودك يعني لنا الكثير.:heart:
سوالف + ضحك + العاب+ وناسه + فعالية+ كل شي.رابط سيرفر. :point_down:
https://discord.gg/S5F8AFQ

[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`
السلام عليكم
حياك الله. في سيرفر IQ. 
وجودك يعني لنا الكثير.:heart:
سوالف + ضحك + العاب+ وناسه + فعالية+ كل شي.رابط سيرفر. :point_down:
https://discord.gg/S5F8AFQ

[${member}]**`);


  });



Client.login(process.env.BOT_TOKEN);
