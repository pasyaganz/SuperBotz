let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let handler  = async (m, { conn, text }) => {
	let nani = 'https://telegra.ph/file/b8d44e92f65c239a44576.jpg'
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [0895-3344-02456]
┣➥ *Dana:* [0895-3344-02456]
┣➥
┗━━━━━━━━━━━━━━━━`, ` © Superbot` , 'SEWABOT', '.hmpo', `OWNER`, `.owner`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.command = /^(donasi|donate|donasibot)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)