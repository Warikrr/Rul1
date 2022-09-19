let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'Hɪɪ, Iᴍ ᴀ ᴡʜᴀᴛsᴀᴘᴘ ʀᴏʙᴏᴛ ɴᴀᴍᴇᴅ Qʏɴᴢᴜᴜ. ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ (ᴡʜᴀᴛsAᴘᴘ Bᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ sᴏᴍᴇᴛʜɪɴɢ, sᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ WʜᴀᴛsAᴘᴘ,Tᴏ sᴇᴇ ᴛʜᴇ ʙᴏᴛ ғᴇᴀᴛᴜʀᴇs ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ\n\nɴᴏᴛᴇ: ᴘʟᴇᴀsᴇ ᴜsᴇ ʙᴏᴛs ᴡɪsᴇʟʏ ᴀɴᴅ ᴅᴏɴᴛ sᴘᴀᴍᴍ!!', data.namabot, 'ʟɪꜱᴛᴍᴇɴᴜ', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Jangan Dispam Ya Kak',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


