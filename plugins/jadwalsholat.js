let { jadwalsholat } = require('@bochilteam/scraper')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} surabaya`
    const res = await jadwalsholat(text)
    
    let tx = `Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}`
    conn.sendButtonDoc(m.chat, tx, wm, 'Menu', `${usedPrefix}menu`, fake, { contextInfo: { 
externalAdReply :{
    showAdAttribution: true,
    title: run,
    body: wm,
    mediaType: 2,
    sourceUrl: data.linkig,
    mediaUrl: data.linkig,
    thumbnail: await(await fetch(img)).bufer(),
    }}
  })
}

handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler
