/**
* Kalo Eror Tqto nya Perbaiki aja
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {

    conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
 *BIG THANKS*
Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Aguz Familia:
https://github.com/FokusDotId
Amelia Lisa:
https://github.com/Ameliascrf
Aniq12
https://github.com/aniq12
Ilman: 
https://github.com/ilmanhdyt
Amirul: 
https://github.com/amiruldev20
Irwan:
https://github.com/irwanx
Rasel:
https://github.com/raselcomel
Arull:
https://github.com/Warikrr

\`\`\`${conn.user.name}\`\`\`
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
