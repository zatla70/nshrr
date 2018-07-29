client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ KillerFox`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot By ┃ KillerFox ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`KillerFox online 24/7 `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

         client.on('message', message => {
            if (message.content === 'السلام عليكم ') {
              message.channel.send('**:heart: وعليكم السلام حبي:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
         client.on('message', message => {
            if (message.content === 'هلا ') {
              message.channel.send('**:heart: هلا بيك:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
         client.on('message', message => {
            if (message.content === 'hla ') {
              message.channel.send('**:heart: هلا بيك:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
         client.on('message', message => {
            if (message.content === 'fox ') {
              message.channel.send('**:heart: انا نايم ما اقدر ارد دا بوت:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
         client.on('message', message => {
            if (message.content === 'KillerFox ') {
              message.channel.send('**:heart: انا نايم ما اقدر ارد دا بوت:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
         client.on('message', message => {
            if (message.content === 'باي ') {
              message.channel.send('**:heart: الله معاك :heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
         client.on('message', message => {
            if (message.content === 'online') {
              message.channel.send('**:heart: نعم انا مثل البوت :heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
client.on('message', message => {
        if (message.content === "FoxBot") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: اضغط هنا `)
        .setURL(` https://discordapp.com/api/oauth2/authorize?client_id=460797113643696129&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });
client.on('message', message => {
        if (message.content === "Jungle NetWork") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: اضغط هنا `)
        .setURL(` https://discord.gg/XSURQ5`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });
 client.login('NDE0NDc3NDM4ODY5ODMxNjgy.Dj4UKQ.LtN-nvJH0QBHFy3H3cMPJrH3zEg');
