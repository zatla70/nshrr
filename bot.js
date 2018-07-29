
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`***:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

:fish_cake:  https://discord.gg/azSj5AV
يعلن سيرفرنا عن قيام مسابقه والشروط جد سهله و مضمونه .
الجوائز :
المركز الاول:  40$ + 500.000 كريديت
المركز الثاني:  20$ + 240.000 كريديت
المركز الثالت:  10$ + 100.000 كريديت
@here 
الشروط ترسل صوره ل @@!       MDMRHM  4Ӄ 
و تنشر السيرفو بكل مكان .
طريقه تخليك تفوز :
تقل لاخوانك يصوتولك عرقمك بالمسابقه
حض موفق للجميع
https://discord.gg/azSj5AV
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`***:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

:fish_cake:  https://discord.gg/azSj5AV
يعلن سيرفرنا عن قيام مسابقه والشروط جد سهله و مضمونه .
الجوائز :
المركز الاول:  40$ + 500.000 كريديت
المركز الثاني:  20$ + 240.000 كريديت
المركز الثالت:  10$ + 100.000 كريديت
@here 
الشروط ترسل صوره ل @@!       MDMRHM  4Ӄ 
و تنشر السيرفو بكل مكان .
طريقه تخليك تفوز :
تقل لاخوانك يصوتولك عرقمك بالمسابقه
حض موفق للجميع
https://discord.gg/azSj5AV
[${member}]**`);


  });



Client.login("NDcyNzcxODUwODYzMjQ3MzYx.Dj4OyQ.Hm7avdVwqmwARnjvA3Hc6m_U1NY");
