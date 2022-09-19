const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	conn.p[id] = [
	await conn.sendKontak(m.chat, data.kontak, fake, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    body: 'Owner Saya Ganteng Loh Kak',
    title: 'Nih My Owner',
    sourceUrl: data.sc,
    thumbnail: await(await fetch(img)).buffer(),
     }}
  })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `𝗛𝗮𝗶 𝗸𝗶𝗱𝘀 @${m.sender.split('@')[0]}, 𝗜𝗻𝗳𝗼 𝗽𝗲𝗻𝘁𝗶𝗻𝗴 𝗼𝘄𝗻𝗲𝗿 𝗯𝗼𝘁 𝘀𝗮𝗻𝗴𝗮𝘁 𝗚𝗔𝗡𝗧𝗘𝗡𝗚!`, mentions: [m.sender] }, { quoted: conn.p[id][0]
  })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
