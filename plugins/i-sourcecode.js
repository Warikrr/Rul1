let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `
*NIH:*
*https://youtu.be/IL2PZql859c*
*Jangan Lupa Subscribe*

*My Github:*
*https://github.com/Warikrr*

`
     conn.relayMessage(m.chat, txt,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'RP',
      amount1000: 2000000000000000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


