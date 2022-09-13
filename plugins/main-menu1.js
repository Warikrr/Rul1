let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('August 18, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let pe = '```'

conn.send2ButtonDoc(m.chat, 'ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ ArullBotz,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ Sahrull,ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ʙᴇʀʙᴀɢᴀɪ ʜᴀʟ ʏᴀɴɢ ᴀᴅᴀ ᴅɪᴅᴜɴɪᴀ ʙᴏᴛ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ʙᴏᴛ,ꜱɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ\n\nᵀᴵᴹᴱ: ${time}\nᴰᴬᵀᴱ: ${date}', data.namabot, 'ʟɪꜱᴛᴍᴇɴᴜ', '.m', 'ᴏᴡɴᴇʀ', '.owner', fake)
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


