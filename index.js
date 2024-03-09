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
    .setApplicationId('1208394624708649000') //cái này không sửa nhé
    .setType('PLAYING') //cái này có thể đổi sang dạng LISTENING , PLAYING
    .setURL('https://twitch.tv/zinxinchao') //paste link TWITCH của mình nếu cài cái Type ở trên là STREAMING
    .setState('Plyaing') //đang chơi nếu là PLAYING và STREAMING, nghe nếu là LISTENING
    .setName('Garena Free Fire') //Tên nếu để chế độ PLAYING, LISTENING
    .setDetails('iPhone 13 Pro Max') //Tên nếu để chế độ STREAMING
    .setStartTimestamp(Date.now()) //thời gian 
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1086722226751013004/1216079182161776750/IMG_0599.png?ex=65ff14fe&is=65ec9ffe&hm=41537f28451d1ba4d9943b7b&') //ảnh lớn (dạng.png hoặc .gif)
  .setAssetsLargeText('img_0599') //tên của ảnh lớn

  //.addButton('Avocado School🥑', 'https://discord.gg/aavocadoschool') // nút 1
 // .addButton('Facebook Contact', 'https://www.facebook.com/hi.i.am.tqv.1706') // nút 2
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // status (online, dnd, idle)
})

client.login(process.env.TOKEN)