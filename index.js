const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {

  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  
  const r = new Discord.RichPresence()
    .setApplicationId('1208394624708649000')
    .setType('PLAYING')
    .setURL('https://twitch.tv/zinxinchao')
    .setState('Plyaing')
    .setName('Garena Free Fire')
    .setDetails('iPhone 13 Pro Max')
    .setStartTimestamp(Date.now()) 
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1086722226751013004/1216079182161776750/IMG_0599.png?ex=65ff14fe&is=65ec9ffe&hm=41537f28451d1ba4d9943b7b&') //ảnh lớn (dạng.png hoặc .gif)
    .setAssetsLargeText('img_0599')
    //.addButton('nameyourbutton1', 'https://discord.gg/')
    //.addButton('nameyourbutton2', 'https://www.facebook.com/')

  
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

