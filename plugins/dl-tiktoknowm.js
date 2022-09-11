let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
         res.json = `https://api.lolhuman.xyz/api/tiktok3?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}`
    let json = await res.json()
    
    m.reply(data.wait)
await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
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
    await conn.sendButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktok3?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}`, txt, wm, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)nowm(dl)?(download(er)?)?$/i


module.exports = handler
