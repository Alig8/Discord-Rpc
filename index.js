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
    .setAssetsLargeImage('mp:http://attachments/1086722226751013004/1216502186851172493/1001710092707.png?ex=66009ef2&is=65ee29f2&hm=0167468ad717bad51a941b6a6171833e8c87367c6c2b4754ae05b16d29f98ca8&') //ảnh lớn (dạng.png hoặc .gif)
    //.setAssetsLargeText('FFicone')
    //.addButton('nameyourbutton1', 'https://discord.gg/')
    //.addButton('nameyourbutton2', 'https://www.facebook.com/')

  
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

