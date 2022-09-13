let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    let img = 'https://telegra.ph/file/630a9a34ab2859888ec36.jpg'
    user.afk = + new Date
    user.afkReason = text
    conn.sendButtonLoc(m.chat, `
${conn.getName(m.sender)} sekarang AFK${text ? ': ' + text : ''}
`, wm, m)
}
handler.help = ['afk <reason>']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
