let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • im3 [085822347348]
│ • axis  [083843192208]
│ • Dana  [085822347348]
│ • Saweria  [https://saweria.co/arullofc]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285822347348
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', fake) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
