let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendButtonDoc(m.chat, `
${conn.getName(m.sender)} sekarang AFK${text ? ': ' + text : ''}
`, 'Oke', 'ok', wm, m)
}
handler.help = ['afk <reason>']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
