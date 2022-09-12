let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 // let url = `https://api.lolhuman.xyz/api/instagram?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}`
  m.reply(data.wait) 
await conn.reply(m.chat, `Downloading media from Instagram`, m, { 
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
  })
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/instagram?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}` , txt, wm, 'Menu', '.menu', 'Thanks', 'thcx',  m)
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|Instagram)$/i

module.exports = handler
