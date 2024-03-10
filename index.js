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
    .setAssetsLargeImage('FFicon') //ảnh lớn (dạng.png hoặc .gif)
    .setAssetsLargeText('img_0599')
    //.addButton('nameyourbutton1', 'https://discord.gg/')
    //.addButton('nameyourbutton2', 'https://www.facebook.com/')

  
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

