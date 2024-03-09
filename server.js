const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send(`نشط حاليا...`)
})

function keepAlive() {
server.listen(8080, () => { console.log("الخادم نشط بلفعل" + Date.now()) });
}

module.exports = keepAlive;