const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
//const tiktod = require('tiktok-scraper')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')

const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, LolKey,XteamKey, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const premiun = JSON.parse(fs.readFileSync('./database/json/userprem.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const premtod = JSON.parse(fs.readFileSync('./database/json/premtod.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const sayrandom = JSON.parse(fs.readFileSync('./src/say.json'))
const afk = JSON.parse(fs.readFileSync('./database/json/afk.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./src/bacot.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { help, kontl, profil, bahasa, ping, donasi, limitend, hanz, limitcount, bangsat, zod, made, bottt } = require('./zitsraa/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Zitsraaシ︎\n'
            + 'ORG:Owner Hanz;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281226770537:+62 831-1800-241\n'
            + 'END:VCARD'

prefix = "z"
name = " HANZ BOT"
meymec = "𝙇𝙀𝙑𝙀𝙇𝙄𝙉𝙂"
rdaftar = "TERIMA KASIH TELAH DAFTAR MENJADI TEMEN HANZ BOT😁"
rmenu = "𝙕𝙞𝙩𝙨𝙧𝙖𝙖"
zodiak = "𝙂𝙀𝙏 𝙕𝙊𝘿𝙄𝘼𝙆"
botinfo = "𝙄𝙉𝙁𝙊 𝘽𝙊𝙏︎"
limitt = 9999
memberLimit = 2
ban = []
premium = ["6281226770537@s.whatsapp.net"]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}
function addMetadata(packname, author) {
				if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' Zitsraa';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}
		
		
		
const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)
		}

const limitAdd = (sender) => {
		let position = false
		Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
		position = i 
		}
	}
)
		if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
		}
	} 
const getAllPremiumUser = () => {
		const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
		})
		return array
		}
const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return premium[position].expired 
	}
} 
const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		premium.splice(position, 1)
		fs.writeFileSync('./database/json/userprem.json', JSON.stringify(premium)) 
		}
	}, 1000)
}
		
		
async function starts() {
	const Zitsraa = new WAConnection()
	Zitsraa.logger.level = 'warn'
	console.log(banner.string)
	Zitsraa.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Scan the qr code above', 'green'))
	})

	fs.existsSync('./zitsraa.json') && Zitsraa.loadAuthInfo('./zitsraa.json')
	Zitsraa.on('connecting', () => {
		start('2', 'Connecting...')
	})
	Zitsraa.on('open', () => {
		success('2', 'Hanz Connected')
	})
	await Zitsraa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./zitsraa.json', JSON.stringify(Zitsraa.base64EncodedAuthInfo(), null, '\t'))

	Zitsraa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Nama : @${num.split('@')[0]}
Admin : 𝙁𝙖𝙡𝙨𝙚 >_<
────────────────

 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 𝐆𝐫𝐨𝐮𝐩 ${mdata.subject} 
 
 ◪ Intro dulu jangan seleb ya kak >_<
     +  ❏   Nama              :
     +  ❏   Askot               :
     +  ❏   Umur                :
     +  ❏   Gender             :
     +  ❏   Instagram       :
     +  ❏   Zodiak             :

𝗡𝗢𝗧𝗘 :
     𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘱𝘦𝘳𝘢𝘵𝘶𝘩𝘪 𝘱𝘦𝘳𝘢𝘵𝘶𝘢𝘯 𝘎𝘳𝘰𝘶𝘱 𝘪𝘯𝘪!
     𝘑𝘢𝘯𝘨𝘢𝘯 𝘭𝘶𝘱𝘢 𝘪𝘯𝘵𝘳𝘰𝘯𝘺𝘢 𝘬𝘢𝘬 >_<
     
 𝘊𝘰𝘮𝘮𝘢𝘯𝘥 𝘉𝘖𝘛 𝘛𝘺𝘱𝘦 : ${prefix}menu`

				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Nama : @${num.split('@')[0]} 
Status : 𝙁𝙖𝙡𝙨𝙚 -,-
────────────────

𝗧𝗘𝗟𝗔𝗛 𝗞𝗘𝗟𝗨𝗔𝗥 𝗗𝗔𝗥𝗜 𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗜 -,-
𝙈𝙖𝙧𝙞 𝙙𝙤𝙖𝙠𝙖𝙣 𝘼𝙡-𝙁𝙖𝙩𝙞𝙝𝙖𝙝 𝙖𝙜𝙖𝙧 𝙩𝙚𝙣𝙖𝙣𝙜 𝙙𝙞𝙨𝙖𝙣𝙖...

𝘚𝘢𝘺𝘰𝘯𝘢𝘳𝘢𝘢👋👋	`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		Zitsraa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	Zitsraa.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : freply.key.remoteJid
			pushname2 = Zitsraa.contacts[nameReq] != undefined ? Zitsraa.contacts[nameReq].vname || Zitsraa.contacts[nameReq].notify : undefined

			const {text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, mentionedJidList } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			Zitsraa.chatRead(from)
			


            

const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
			mess = {
				wait: '*⏳ ᴡᴀɪᴛ ꜱᴇᴅᴀɴɢ ᴅɪ ᴩʀᴏꜱᴇꜱ...*',
				success: '*ꜱᴜᴋꜱᴇꜱ...*',
				error: {
					bug: '*Terjadi Kesalahan Coba Hubungi Owner Untuk Melaporkan Kesalahan*',
					stick: ' *ɢᴀɢᴀʟ, ᴛᴇʀᴊᴀᴅɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜱᴀᴀᴛ ᴍᴇɴɢᴋᴏɴᴠᴇʀꜱɪ ɢᴀᴍʙᴀʀ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ*',
					Iv: '*ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!!*'
				},
				only: {
					group: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴩ!*',
					benned: '*ᴍᴀᴀꜰ ɴᴏᴍᴇʀ ᴋᴀᴍᴜ ᴋᴇ ʙᴀɴɴᴇᴅ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴀɢᴀʀ ᴍᴇᴍʙᴜᴋᴀ ʙᴀɴɴᴇᴅ ᴀɴᴅᴀ*',
					ownerG: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ɢʀᴏᴜᴩ!*',
					ownerB: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ʙᴏᴛ!* ',
					premiun: ' *Maaf fitur ini khusus Premium*',
					premium: '*ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!!*',
					userB: `────「 Unregistered 」────
  
Hai Kak ${pushname2}
Kamu Belum Terdaftar Didatabase Silahkan Ketik 
${prefix}verify

────「 𝗭𝗜𝘁𝘀𝗿𝗮𝗮 𝗕𝗢𝗧 」────`,
					admin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴩ!*',
					Badmin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!*',
					publikG: `*ᴍᴀᴀꜰ ʙᴏᴛ ꜱᴇᴋᴀʀᴀɴɢ ꜱᴜᴅᴀʜ ᴅɪᴩʀɪᴠᴀᴛᴇ ᴏʟᴇʜ ᴏᴡɴᴇʀ*\n*ᴜɴᴛᴜᴋ ʟᴇʙɪʜ ᴊᴇʟᴀꜱɴyᴀ ᴋᴇᴛɪᴋ*\n*${prefix}infobot*`
				}
			}

			const botNumber = Zitsraa.user.jid
			const ownerNumber = ["6281226770537@s.whatsapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
const q = args.join(' ')
			const sender = isGroup ? mek.participant : freply.key.remoteJid
			const groupMetadata = isGroup ? await Zitsraa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await Zitsraa.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isPremtod= isGroup ? premtod.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isPremiun = premiun.includes(sender) || isOwner
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			
const freply4 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Kontol", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('temp/test.jpeg')} } }
		
			
			
			
const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Gajelas banget Lu", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('temp/test.jpeg')} } }
		
const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Ngapain Tag Gua anjg?", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('temp/test.jpeg')} } }
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Zitsraa-BOTシ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('temp/test.jpeg')} } }
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zitsraa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Zitsraaシ︎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('temp/test.jpeg')} } }, contextInfo: {"mentionedJid": memberr}})
			}
const FarhanGans = ["0@s.whatsapp.net"] // ubah aja gapapa
const FarhanGans2 = "Zitsraa BOT"

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Zitsraa.sendMessage(from, teks, text, {quoted:mek})
			}
			

			
			

          
			const sendMess = (hehe, teks) => {
				Zitsraa.sendMessage(hehe, teks, text)
			}
			const costum = (pesan, tipe, target, target2) => {
			Zitsraa.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			
			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			
	
			
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
			
			
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
}

            if (isUser && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }


if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*｢ LEVEL UP ｣*\n\n➣ *Name*: ${sender}\n➣ *XP*: ${getLevelingXp(sender)}\n➣ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🥳`)
                }
            } catch (err) {
                console.error(err)
            }
        }



			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        Zitsraa.sendMessage(from, limitcount(limitCounts), text, { quoted : freply})
                    }
                                }
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberLimit) {
					    Zitsraa.sendMessage(from, `Maaf ${name} Tidak Bisa Masuk Group Karna Member Group ${groupMetadata.subject} Tidak Memenuhi Limit Member\n\nMinimal Member ${memberLimit}`, text)
                            Zitsraa.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    Zitsraa.sendMessage(from, limitend(pushname2), text, {quoted: freply})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
expiredCheck()
			var premi = '*NOT PREMIUM*'
			if (isPremiun) {
			premi = '*YES PREMIUM*'
			} 
			if (isOwner) {
			premi = '*UNLIMITED PREMIUM*'
			}
        
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
        

       if (messagesLink.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		Zitsraa.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee👋')
		}, 1100)
		setTimeout( () => {
		Zitsraa.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname2}* anda akan di kick`)
		}, 0)
		}

     		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
if(budy.match('@6281804680327')){
result = fs.readFileSync(`./temp/stick/tag.webp`)
  Zitsraa.sendMessage(from, result, sticker, {
quoted: freply2
  })
}
if(budy.match('gjelas')){
result = fs.readFileSync(`./temp/stick/gj.webp`)
  Zitsraa.sendMessage(from, result, sticker, {
quoted: freply3
  })
}
if(budy.match('gjls')){
result = fs.readFileSync(`./temp/stick/gj.webp`)
  Zitsraa.sendMessage(from, result, sticker, {
quoted: freply3
  })
}
if(budy.match('mengontol')){
result = fs.readFileSync(`./temp/stick/ktl.webp`)
  Zitsraa.sendMessage(from, result, sticker, {
quoted: freply4
  })
}
if(budy.match('gajelas')){
result = fs.readFileSync(`./temp/stick/gj.webp`)
  Zitsraa.sendMessage(from, result, sticker, {
quoted: freply3
  })
}

			switch(command) {
			case 'ep':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  if (!isPublic) return reply(mess.only.publikG)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Pilih themenya gan, 1 - 162\n\nContoh Penggunaan: !tp/1/Farhan')
				textpro = body.slice(4)
				txtpro1 = textpro.split("/")[0];
				txtpro2 = textpro.split("/")[1];
				buff = await getBuffer(`https://mhankbarbar.tech/api/ephoto?pack=${txtpro1}&text=${txtpro2}&apiKey=${BarBarApi}`, {method: 'get'})
				Zitsraa.sendMessage(from, buff, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'tp':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  if (!isPublic) return reply(mess.only.publikG)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Pilih themenya gan, 1 - 162\n\nContoh Penggunaan: !tp/1/Farhan')
				textpro = body.slice(4)
				txtpro1 = textpro.split("/")[0];
				txtpro2 = textpro.split("/")[1];
				buff = await getBuffer(`https://mhankbarbar.tech/api/textpro?pack=${txtpro1}&text=${txtpro2}&apiKey=${BarBarApi}`, {method: 'get'})
				Zitsraa.sendMessage(from, buff, image, {quoted: freply})
				await limitAdd(sender)
					break
					
case 'blackpink':
							if (!isUser) return reply(mess.only.userB)      
							if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/blackpink?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					Zitsraa.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: freply})
					await limitAdd(sender)
					break
					
					
					
			case 'brainly':
					if (!isUser) return reply(mess.only.userB)
					  if (!isPublic) return reply(mess.only.publikG)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					Zitsraa.sendMessage(from, teks, text, {quoted: freply, detectLinks: false})
                        console.log(res)
                    })
                await limitAdd(sender)
				break 
				
				

				
				case 'verify':
					Zitsraa.updatePresence(from, Presence.composing)
					if (isUser) return reply('Nomor kamu telah Terdaftar di database Zitsraa-BOTシ')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await Zitsraa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `◪ 𝗣𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥

 +  ❏   *Register berhasil*

 +  ❏   *Pada  :*  ${date} ${time}
 +  ❏   *Nama  :*  ${pushname2}
 +  ❏   *Nomor :*  wa.me/${sender.split("@")[0]}

  
Untuk menggunakan bot silahkan
ketik ${prefix}menu
Total Pengguna: ${user.length} User`
					daftarimg = await getBuffer(ppimg)
				await Zitsraa.sendMessage(from, daftarimg, image, {quoted: freply, caption: captionnya}, rmenu)
					break 
case 'blub':
	                if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted:freply})
						fs.unlinkSync(ran)
					    })
				        break
case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted:freply})
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted:freply})
						fs.unlinkSync(ran)
					   })
				       break
				    
				    
				    
				    
				    
case 'gemuk':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted:freply})
						fs.unlinkSync(ran)
					    })
				        break
					
					case '?':
					case 'menu':
	  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
					  		try {
					ppimg = await Zitsraa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i.ibb.co/QXxnsQS/b575e8aa570b.jpg'
					}
					zitsraa = `┏━━━━《 Zitsraa-BOTシ︎ 》━━━━
┃        
┣◪ 「 *INFO* 」
┃https://tīnyurl.com/Zitsraa-BOTシ
┣ ❏ NAMA       :  ${pushname2}
┣ ❏ USER BOT   :  ${user.length}
┣ ❏ Owner      :  Zitsraaシ
┣ ❏ LibBot by  :  Baileys
┣ ❏ Prefix     :「 ${prefix} 」
┃
┣◪ 「 *Readmore* 」
┃
┣ ❏ ${prefix}report
┣ ❏ ${prefix}info
┣ ❏ ${prefix}donasi
┣ ❏ ${prefix}owner
┣ ❏ ${prefix}speed
┣ ❏ ${prefix}verify
┣ ❏ ${prefix}limit
┣ ❏ ${prefix}totaluser
┣ ❏ ${prefix}blocklist
┣ ❏ ${prefix}banlist
┣ ❏ ${prefix}premiumlist
┣ ❏ ${prefix}bahasa
┣ ❏ ${prefix}leaderboard
┃
┣◪ 「 *Media* 」
┃
┣ ❏ ${prefix}tiktokstalk 
┣ ❏ ${prefix}igstalk 
┣ ❏ ${prefix}instavid 
┣ ❏ ${prefix}instaimg 
┣ ❏ ${prefix}instastory
┣ ❏ ${prefix}ssweb
┣ ❏ ${prefix}url2img
┣ ❏ ${prefix}tiktok    
┣ ❏ ${prefix}fototiktok
┣ ❏ ${prefix}kbbi
┣ ❏ ${prefix}wait
┣ ❏ ${prefix}trendtwit
┣ ❏ ${prefix}google 
┃
┣◪ 「 *MENU* 」
┃
┣ ❏ ${prefix}quotemaker 
┣ ❏ ${prefix}nulis 
┣ ❏ ${prefix}croman 
┣ ❏ ${prefix}slide
┣ ❏ ${prefix}tahta 
┣ ❏ ${prefix}party
┣ ❏ ${prefix}galaxtext
┣ ❏ ${prefix}metalteks
┣ ❏ ${prefix}apiteks
┣ ❏ ${prefix}airtext
┣ ❏ ${prefix}kunciteks
┣ ❏ ${prefix}cglass 
┣ ❏ ${prefix}cstyle 
┣ ❏ ${prefix}cgame 
┣ ❏ ${prefix}clove 
┣ ❏ ${prefix}cparty 
┣ ❏ ${prefix}glow
┣ ❏ ${prefix}tts 
┣ ❏ ${prefix}glitch
┣ ❏ ${prefix}love
┣ ❏ ${prefix}coffe
┣ ❏ ${prefix}anakharam
┣ ❏ ${prefix}heker
┣ ❏ ${prefix}cpaper 
┣ ❏ ${prefix}stiker
┣ ❏ ${prefix}gifstiker
┣ ❏ ${prefix}toimg
┣ ❏ ${prefix}tomp3
┣ ❏ ${prefix}toptt
┣ ❏ ${prefix}slapimg
┣ ❏ ${prefix}tolol
┣ ❏ ${prefix}phcoment
┣ ❏ ${prefix}ytcoment
┣ ❏ ${prefix}freefire
┣ ❏ ${prefix}wetglass
┣ ❏ ${prefix}multicolor3d
┣ ❏ ${prefix}watercolor
┣ ❏ ${prefix}luxurygold
┣ ❏ ${prefix}galaxywallpaper
┣ ❏ ${prefix}lighttext
┣ ❏ ${prefix}beautifulflower
┣ ❏ ${prefix}puppycute
┣ ❏ ${prefix}royaltext
┣ ❏ ${prefix}heartshaped
┣ ❏ ${prefix}galaxystyle
┣ ❏ ${prefix}greenneon
┣ ❏ ${prefix}glossychrome
┣ ❏ ${prefix}greenbush
┣ ❏ ${prefix}metallogo
┣ ❏ ${prefix}noeltext
┣ ❏ ${prefix}textcake
┣ ❏ ${prefix}wooden3d 
┣ ❏ ${prefix}starsnight 
┣ ❏ ${prefix}wooden3d 
┣ ❏ ${prefix}textbyname 
┣ ❏ ${prefix}writegalacy 
┣ ❏ ${prefix}glittergold
┣ ❏ ${prefix}hologram3d
┣ ❏ ${prefix}birthdaycake
┣ ❏ ${prefix}galaxybat 
┣ ❏ ${prefix}gta
┣ ❏ ${prefix}snow3d 
┣ ❏ ${prefix}goldplaybutton 
┣ ❏ ${prefix}silverplaybutton 
┣ ❏ ${prefix}fftourserti 
┣ ❏ ${prefix}fftourserti2 
┣ ❏ ${prefix}fftourserti3 
┣ ❏ ${prefix}fftourserti4 
┣ ❏ ${prefix}fftourserti5 
┣ ❏ ${prefix}pubgtourserti
┣ ❏ ${prefix}pubgtourserti2
┣ ❏ ${prefix}pubgtourserti3
┣ ❏ ${prefix}pubgtourserti4
┣ ❏ ${prefix}pubgtourserti5
┣ ❏ ${prefix}mltourserti1
┣ ❏ ${prefix}mltourserti2
┣ ❏ ${prefix}mltourserti3
┣ ❏ ${prefix}mltourserti4
┣ ❏ ${prefix}tweetfake
┣ ❏ ${prefix}bocilepep
┣ ❏ ${prefix}babu
┣ ❏ ${prefix}bucinserti
┣ ❏ ${prefix}nickepep
┃
┣◪ 「 *ANIME* 」
┃
┣ ❏ ${prefix}modeanime 
┣ ❏ ${prefix}neonime 
┣ ❏ ${prefix}naruto   
┣ ❏ ${prefix}minato
┣ ❏ ${prefix}kaguya
┣ ❏ ${prefix}boruto
┣ ❏ ${prefix}hinata
┣ ❏ ${prefix}sakura
┣ ❏ ${prefix}sasuke
┣ ❏ ${prefix}toukachan
┣ ❏ ${prefix}rize
┣ ❏ ${prefix}akira
┣ ❏ ${prefix}itori
┣ ❏ ${prefix}kurumi
┣ ❏ ${prefix}miku
┣ ❏ ${prefix}anime
┣ ❏ ${prefix}animecry
┣ ❏ ${prefix}animekiss
┣ ❏ ${prefix}randomhusbu
┃
┣◪ 「 *CARTOON* 」
┃
┣ ❏ ${prefix}doraemon
┣ ❏ ${prefix}boboiboy
┣ ❏ ${prefix}boboiboy2
┣ ❏ ${prefix}spongebob
┣ ❏ ${prefix}frozen
┃
┣◪ 「 *MENU GROUP* 」
┃
┣ ❏ ${prefix}antilink 
┣ ❏ ${prefix}welcome 
┣ ❏ ${prefix}grup
┣ ❏ ${prefix}bukatime
┣ ❏ ${prefix}tutuptime
┣ ❏ ${prefix}leveling 
┣ ❏ ${prefix}ownergrup
┣ ❏ ${prefix}bacotlist
┣ ❏ ${prefix}bacot
┣ ❏ ${prefix}tag      
┣ ❏ ${prefix}kisstag
┣ ❏ ${prefix}reminder
┣ ❏ ${prefix}setpp
┣ ❏ ${prefix}Level
┣ ❏ ${prefix}mining
┣ ❏ ${prefix}infogc
┣ ❏ ${prefix}add
┣ ❏ ${prefix}kick @tag
┣ ❏ ${prefix}kicktime
┣ ❏ ${prefix}promote
┣ ❏ ${prefix}demote
┣ ❏ ${prefix}setname
┣ ❏ ${prefix}setdesc
┣ ❏ ${prefix}linkgrup
┣ ❏ ${prefix}tagme
┣ ❏ ${prefix}hidetag
┣ ❏ ${prefix}stickertag
┣ ❏ ${prefix}wametag
┣ ❏ ${prefix}tagall
┣ ❏ ${prefix}infoall
┣ ❏ ${prefix}fitnah
┣ ❏ ${prefix}listadmin
┃
┣◪ 「 *ADMIN* 」
┃
┣ ❏ ${prefix}nsfw
┣ ❏ ${prefix}nsfwloli
┣ ❏ ${prefix}nsfwblowjob
┣ ❏ ${prefix}nsfwneko
┣ ❏ ${prefix}nsfwtrap
┣ ❏ ${prefix}hentai
┣ ❏ ${prefix}simih
┣ ❏ ${prefix}zitsraa
┃
┣◪ 「 *FUN* 」
┃
┣ ❏ ${prefix}anjing
┣ ❏ ${prefix}kucing
┣ ❏ ${prefix}testime
┣ ❏ ${prefix}hilih
┣ ❏ ${prefix}apakah
┣ ❏ ${prefix}kapankah
┣ ❏ ${prefix}bisakah
┣ ❏ ${prefix}rate
┣ ❏ ${prefix}slot
┣ ❏ ${prefix}ganteng
┣ ❏ ${prefix}cantik
┣ ❏ ${prefix}babi
┣ ❏ ${prefix}watak
┣ ❏ ${prefix}hobby
┣ ❏ ${prefix}infogempa
┣ ❏ ${prefix}infonomor
┣ ❏ ${prefix}quotes
┣ ❏ ${prefix}truth
┣ ❏ ${prefix}dare
┣ ❏ ${prefix}katabijak
┣ ❏ ${prefix}fakta
┣ ❏ ${prefix}darkjokes
┣ ❏ ${prefix}bucin
┣ ❏ ${prefix}pantun
┣ ❏ ${prefix}katacinta
┣ ❏ ${prefix}jadwaltvnow
┣ ❏ ${prefix}hekerbucin
┣ ❏ ${prefix}katailham
┃
┣◪ 「 *OTHERS* 」
┃
┣ ❏ ${prefix}jarak 
┣ ❏ ${prefix}info
┣ ❏ ${prefix}infobot
┣ ❏ ${prefix}pbot
┣ ❏ ${prefix}wame
┣ ❏ ${prefix}phsearch
┣ ❏ ${prefix}ytsearch
┣ ❏ ${prefix}stalkyt
┣ ❏ ${prefix}githubstalk
┣ ❏ ${prefix}cogan
┣ ❏ ${prefix}cecan
┣ ❏ ${prefix}listvn
┣ ❏ ${prefix}listimg
┣ ❏ ${prefix}itsme
┣ ❏ ${prefix}made
┣ ❏ ${prefix}listzodiak
┣ ❏ ${prefix}translate 
┣ ❏ ${prefix}pasangan 
┣ ❏ ${prefix}gantengcek
┣ ❏ ${prefix}cantikcek 
┣ ❏ ${prefix}artinama
┣ ❏ ${prefix}persengay 
┣ ❏ ${prefix}pbucin 
┣ ❏ ${prefix}bpfont 
┣ ❏ ${prefix}textstyle 
┣ ❏ ${prefix}jadwaltv 
┣ ❏ ${prefix}lirik 
┣ ❏ ${prefix}chord 
┣ ❏ ${prefix}wiki 
┣ ❏ ${prefix}brainly 
┣ ❏ ${prefix}resepmasakan 
┣ ❏ ${prefix}map 
┣ ❏ ${prefix}gemuk
┣ ❏ ${prefix}bass
┣ ❏ ${prefix}ghost
┣ ❏ ${prefix}blub
┣ ❏ ${prefix}film 
┣ ❏ ${prefix}pinterest 
┣ ❏ ${prefix}infocuaca 
┣ ❏ ${prefix}jamdunia 
┣ ❏ ${prefix}mimpi
┣ ❏ ${prefix}infoalamat 
┣ ❏ ${prefix}playstore 
┃
┣◪ 「 *GAME* 」
┃
┣ ❏ ${prefix}readmore        
┣ ❏ ${prefix}puisiimg
┣ ❏ ${prefix}asupan
┣ ❏ ${prefix}tebakgambar
┣ ❏ ${prefix}tebakumur
┣ ❏ ${prefix}tebakangka
┣ ❏ ${prefix}vslot
┣ ❏ ${prefix}suit
┣ ❏ ${prefix}caklontong
┣ ❏ ${prefix}family100
┣ ❏ ${prefix}memeindo
┣ ❏ ${prefix}memeen
┣ ❏ ${prefix}meme
┣ ❏ ${prefix}kalkulator 
┣ ❏ ${prefix}apkmod
┣ ❏ ${prefix}moddroid 
┣ ❏ ${prefix}happymod 
┃
┣◪ 「 *18+* 」
┃
┣ ❏ ${prefix}randomkpop
┣ ❏ ${prefix}cersex
┣ ❏ ${prefix}ceritahoror
┣ ❏ ${prefix}cerpen
┣ ❏ ${prefix}randombokep
┣ ❏ ${prefix}coli
┣ ❏ ${prefix}xxz
┣ ❏ ${prefix}pornhub 
┣ ❏ ${prefix}xvideos 
┣ ❏ ${prefix}nekopoi 
┃
┣◪ 「 *PRAY* 」
┃
┣ ❏ ${prefix}jadwalsholat 
┣ ❏ ${prefix}quran
┣ ❏ ${prefix}kisahnabi
┣ ❏ ${prefix}quranlist
┣ ❏ ${prefix}quransurah
┃
┣◪ 「 *FIND* 」
┃
┣ ❏ ${prefix}becrypt 
┣ ❏ ${prefix}encode64 
┣ ❏ ${prefix}decode64 
┣ ❏ ${prefix}encode32 
┣ ❏ ${prefix}decode32 
┣ ❏ ${prefix}encbinary 
┣ ❏ ${prefix}decbinary 
┣ ❏ ${prefix}encoctal 
┣ ❏ ${prefix}decoctal 
┣ ❏ ${prefix}hashidentifier 
┣ ❏ ${prefix}dorking 
┣ ❏ ${prefix}pastebin 
┣ ❏ ${prefix}tinyurl 
┣ ❏ ${prefix}bitly 
┃
┣◪ 「 *SPAM* 」
┃
┣ ❏ ${prefix}spamcall
┣ ❏ ${prefix}spamgmail 
┃
┣◪ 「 *OWNER* 」
┃
┣ ❏ ${prefix}addprem
┣ ❏ ${prefix}dellprem
┣ ❏ ${prefix}hanzprem
┣ ❏ ${prefix}setmemlimit
┣ ❏ ${prefix}setlimit
┣ ❏ ${prefix}setreply
┣ ❏ ${prefix}setreplyz
┣ ❏ ${prefix}setprefix
┣ ❏ ${prefix}setnamebot
┣ ❏ ${prefix}setppbot
┣ ❏ ${prefix}addbucin
┣ ❏ ${prefix}addbacot
┣ ❏ ${prefix}addsay
┣ ❏ ${prefix}addstik
┣ ❏ ${prefix}addvn
┣ ❏ ${prefix}addimg
┣ ❏ ${prefix}addvid
┣ ❏ ${prefix}ohidetag
┣ ❏ ${prefix}ostickertag
┣ ❏ ${prefix}okisstag
┣ ❏ ${prefix}bc
┣ ❏ ${prefix}bcgc
┣ ❏ ${prefix}ban
┣ ❏ ${prefix}unban
┣ ❏ ${prefix}block
┣ ❏ ${prefix}unblock
┣ ❏ ${prefix}clearall
┣ ❏ ${prefix}delete
┣ ❏ ${prefix}clone
┣ ❏ ${prefix}getses
┣ ❏ ${prefix}leave
┃
┣◪ 「 *PREMIUM* 」
┃
┣ ❏ ${prefix}play
┣ ❏ ${prefix}ytplay
┣ ❏ ${prefix}fb 
┣ ❏ ${prefix}snack 
┣ ❏ ${prefix}ytmp3 
┣ ❏ ${prefix}ytmp4 
┣ ❏ ${prefix}joox
┣ ❏ ${prefix}joox2
┣ ❏ ${prefix}smule
┃
┗━━━━《 Zitsraa-BOTシ︎ 》━━━━`

asoo = await getBuffer(ppimg)
Zitsraa.sendMessage(from, asoo, image, { quoted: freply, caption: zitsraa })
					break
					
		
					
case 'bocil': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
					
					
					
case 'tweetfake': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/Tweet/?text=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'babu': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://onlydevcity.xyz/docs/api/BabuSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'bucinserti': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(12)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://onlydevcity.xyz/docs/api/BucinSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'bocilepep': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://onlydevcity.xyz/docs/api/CilEpepSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
					
					
case 'fftourserti2': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'fftourserti3': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'fftourserti4': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'fftourserti5': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'pubgtourserti': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'pubgtourserti2': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'pubgtourserti3': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'pubgtourserti4': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'pubgtourserti5': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'mltourserti': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti1/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'mltourserti1': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'mltourserti2': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'mltourserti3': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'mltourserti4': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
case 'fftourserti': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
					
			case 'helpp':
			case 'menup':
			  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				uptime = process.uptime()
				user.push(sender)
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
const duit = checkATMuser(sender)
					await costum(help(prefix, instagram, getLevelingLevel, getLevelingXp, sender, name, pushname2, user, limitt, uptime, jam, tanggal, duit), text, FarhanGans, FarhanGans2)
    				break 
    			case 'infobot':
    			  
    				await costum(bottt(prefix), text, FarhanGans, botinfo)
    				break
    				
    				

    				
    				
case 'pbot':
  if (!isPublic) return reply(mess.only.publikG)
    				await costum(hanz(prefix), text, FarhanGans, rmenu)
    				break
    				case 'levffel':
    				  if (!isPublic) return reply(mess.only.publikG)
    				  await costum(kontl(pushname2, sender, getLevelingXp, getLevelingLevel), text, FarhanGans,
    				  meymec)
    				  break
    				  
case 'snowwrite':
					var gh = body.slice(11)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply(`Kirim perintah ${prefix}snowwrite teks1|teks2, contoh ${prefix}snowwrite rapa|ganss`)
                    if (!isUser) return reply(mess.only.userB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
                                        await limitAdd(sender)
					break
				           
case 'mlogo':
  if (!isPublic) return reply(mess.only.publikG)
					var gh = body.slice(7)
					if (args.length < 1) return reply(`Kirim perintah ${prefix}marvellogo teks, contoh ${prefix}marvellogo Nazwa Canss`)
                                      Zitsraa.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${gh}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
                                        await limitAdd(sender)
					break
				case 'bahasa':
				if (!isPublic) return reply(mess.only.publikG)
				await costum(bahasa(prefix), text, FarhanGans, rmenu)
				break 
				
case 'me':
  if (!isPublic) return reply(mess.only.publikG)
  await costum(profil(pushname2, sender), text, FarhanGans, rmenu)
				break
				
case 'qrcode':
  if (!isPublic) return reply(mess.only.publikG)
			if (!isUser) return reply(mess.only.userB)      
					if (!isGroup) return reply(mess.only.group)
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return Zitsraa.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: freply})
			const nob = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			Zitsraa.sendMessage(from, nob, image, {quoted: freply, caption: 'Nih Gan'})
			await limitAdd(sender)
			break
					
case 'listzodiak':
  if (!isPublic) return reply(mess.only.publikG)
					await costum(zod(pushname2,sender), text, FarhanGans, zodiak)
				break
				
case 'made':
  if (!isPublic) return reply(mess.only.publikG)
					await costum(made(name), text, FarhanGans, rmenu)
				break
case 'donate':
  if (!isPublic) return reply(mess.only.publikG)
					await costum(donasi(name), text, FarhanGans, rmenu)
					break
				case 'info':
				  if (!isPublic) return reply(mess.only.publikG)
					me = Zitsraa.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *Nama Bot* : ${me.name}\n➽ *Owner Bot* : @${ownerNumber}\n➽ *prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Aktif Sejak* : ${kyun(uptime)}\n\n➽ *Total Pengguna* : ${user.length} User\n➽ *Instagram* : https://www.instagram.com/__zitsraa\n➽ *Special Thanks To* :\n\n➽ Allah SWT \n➽ MhankBarBar\n➽ Nurutomo\n➽ Monurios`
					buffer = await getBuffer(me.imgUrl)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
				case 'totaluser':
				  if (!isPublic) return reply(mess.only.publikG)
					Zitsraa.updatePresence(from, Presence.composing) 
					  
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
				  if (!isPublic) return reply(mess.only.publikG)
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				  if (!isPublic) return reply(mess.only.publikG)
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					Zitsraa.sendMessage(from, ben.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": ban}})
					break
				case 'premiumlisdt':
				  if (!isPublic) return reply(mess.only.publikG)
					Zitsraa.updatePresence(from, Presence.composing) 
					  
					if (!isUser) return reply(mess.only.userB)
					teks = `╭─「 *TOTAL USER PREMIUM ${name}* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `[${no.toString()}] @${prem.split('@')[0]}\n`
					}
					teks += `│+ Total User Premium : ${premium.length}\n╰──────⎿ *${name}* ⏋────`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": premium}})
					break
				case 'ban':
					Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'addprem1':
					Zitsraa.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'removeprem1':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
					break
					

					
					
					
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 Zitsraa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					Zitsraa.blockUser (`${body.slice(7)}@c.us`, "add")
					Zitsraa.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    Zitsraa.blockUser (`${body.slice(9)}@c.us`, "remove")
					Zitsraa.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benne) 
					if (!isPublic) return reply(mess.only.publikG)
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					Zitsraa.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: freply })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
					case 'limit':
					  if (!isPublic) return reply(mess.only.publikG)
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`Limit anda habis`)
                            await reply(`*LIMIT ANDA TINGGAL: ${limitt}*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id : sender, limit : 1 }
                        limit.push(obj);
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                        await reply(`LIMIT ANDA ${limitt}`)
                    }
					break
				case 'ocr':
				  if (!isPublic) return reply(mess.only.publikG)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break 
				case 'gifstiker':
				case 'stiker':
				case 'stiker':
				case 's':
				  if (!isPublic) return reply(mess.only.publikG)
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Gagal, pada saat mengkonversi ${tipe} ke stiker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								Zitsraa.sendMessage(buff, sticker, {quoted: freply}, rmenu)
							})
						})
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					await limitAdd(sender) 
					break
					case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${LolKey}&img=${ini_url}`
                    exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        Zitsraa.sendMessage(from, buff, sticker, { quoted: freply })
                        fs.unlinkSync(rano)
                    })
                    break
case 'epep':
  if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(8)
					if (tels.ength > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/logoff?hero=alok&text=${tels}&apikey=${VthearApi}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					 Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
					break
				case 'img2url':
				  if (!isPublic) return reply(mess.only.publikG)
			if (!isUser) return reply(mess.only.userB)
			
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
			var media = await  Zitsraa.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n│\n*│• URL :* ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
			Zitsraa.sendMessage(from, ibb, image, { quoted: freply, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			await limitAdd(sender) 	
			break

                 case 'kalkulator':
                   if (!isPublic) return reply(mess.only.publikG)
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				     
				   if (isLimit(sender)) return reply(limitend(pushname2))
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    Zitsraa.sendMessage(from, `*${anu.result.data}*`, text, {quoted: freply})
				    await limitAdd(sender) 	
				    break 
				case 'owner':
				  if (!isPublic) return reply(mess.only.publikG)
                 Zitsraa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 Zitsraa.sendMessage(from, 'Jika Mau Save Chat Aja Gan Ntar Disave Back:)',text, { quoted: freply} )
                 break
                case 'fitnah':
                  if (!isPublic) return reply(mess.only.publikG)
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                   
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					Zitsraa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break

				case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
				if (isBanned) return reply(mess.only.benned)  
				   if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)
                Zitsraa.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await Zitsraa.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
				case 'trendtwit':
				  if (!isPublic) return reply(mess.only.publikG)
					Zitsraa.updatePresence(from, Presence.composing) 
                     if (!isUser) return reply(mess.only.userB)
                       
                     if (isLimit(sender)) return reply(limitend(pushname2))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					reply(mess.wait)
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'testime':
				  if (!isPublic) return reply(mess.only.publikG)
					setTimeout( () => {
					Zitsraa.sendMessage(from, 'Waktu habis:v', text, {quoted: freply}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '5 Detik lagi', text, {quoted: freply}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '10 Detik lagi', text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break 
case 'imageislamic':
  if (!isPublic) return reply(mess.only.publikG)
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limits.limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.shizukaa.xyz/wpislamic?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: mem})
					await limitAdd(sender) 
					break

case 'babi':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mesck = groupMembers
					const mskk = groupMembers
					const siapsa = mesck[Math.floor(Math.random() * mesck.length)]
					const sipsi = pushname2[Math.floor(Math.random() * mskk.length)]
					teks = `*BABI DISINI ADALAH :* @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
					
					
				case 'animecry':
				  if (!isPublic) return reply(mess.only.publikG)
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
                     
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						Zitsraa.sendMessage(from, buffer, sticker, {quoted: freply})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
case 'modapk':
  if (!isPublic) return reply(mess.only.publikG)
					await costum(bangsat(name), text, FarhanGans, rmenu)
break
				case 'neonime':
				  if (!isPublic) return reply(mess.only.publikG)
					Zitsraa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                    if (!isUser) return reply(mess.only.userB)
                      
                    if (isLimit(sender)) return reply(limitend(pushname2))
                    if (isBanned) return reply(mess.only.benned)
                    if (!isGroup) return reply(mess.only.group)
                    reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
				case 'animehug':
				  if (!isPublic) return reply(mess.only.publikG)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
                     
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						Zitsraa.sendMessage(from, buffer, sticker, {quoted: freply})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'gruplink':
				case 'grouplink':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await Zitsraa.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Zitsraa.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
			        
case 'addbacot':
                    if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    huu = body.slice(9)
						bacotrandom.push(huu)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, Kata ${huu} Telah Ditambahkan ke database`)
						break
                   case 'bacotlist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let hehee of bacotrandom) {
						teks += `╠➥ ${hehee}\n`
					}
					teks += `Total : ${bacotrandom.length}`
					 Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": bacotrandom}})
					break
                    case 'resetbacot':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						bacotrandom.splice(hai)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, database bacot telah direset`)
						break
                    case 'bacot':
                      if (!isPublic) return reply(mess.only.publikG)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = bacotrandom[Math.floor(Math.random() * (bacotrandom.length))]
                    reply(hasil)
                    break
case 'ohidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					var value = body.slice(9)
					var group = await Zitsraa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					Zitsraa.sendMessage(from, options, text)
					break
case 'estetik':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
case 'boboiboy':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply(' Harus Mengaktifkan Mode Anime ')
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=boboiboy`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
					
case 'spongebob':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply(' Harus Mengaktifkan Mode Anime ')
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=spongebob`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
					case 'frozen':
					  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply(' Harus Mengaktifkan Mode Anime ')
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=frozen`, {method: 'get'})
				reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
case 'boboiboy2':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply(' Harus Mengaktifkan Mode Anime ')
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=ochobot`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
case 'doraemon':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply(' Harus Mengaktifkan Mode Anime ')
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
case 'kaguya':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaguya`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
				case 'hidetag':
				
				    if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await Zitsraa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					Zitsraa.sendMessage(from, options, text)
					break
					

				case 'stickertag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Zitsraa.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Zitsraa.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = 'Tag Ye'
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Zitsraa.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
case 'ostickertag':
  if (!isOwner) return('Kamu siapa?')
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Zitsraa.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Zitsraa.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = 'Tag Ye'
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Zitsraa.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
case 'mining':
  if (!isPublic) return reply(mess.only.publikG)
                      if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
if (!isGroup) return reply(mess.only.group)
                      if (isOwner) {
                      const one = 100000
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner..\nZitsraa  mengirim ${one} Xp untuk anda`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname2} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
					

		case 'level':
                if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname2}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               Zitsraa.sendMessage(from, resul, text, { quoted: freply})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!`)
                    })
					break
				case 'gantengcek':
				case 'cekganteng':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: freply })
					break
					
case 'slot':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					sotoy = body.slice(12)
					const ngentot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
                '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
					const sot = ngentot[Math.floor(Math.random() * ngentot.length)]
					Zitsraa.sendMessage(from, 'Fun : *'+sotoy+'*\n\n[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n '+ sot +'<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====', text, { quoted: freply })
					break


case 'join':
					if (args.length == 0) return reply(from, `maaf ,bot ini hanya bisa dimasukkan ke grup `, text)
					let linkgrup = `${body.slice(6)}`
					let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
					let chekgrup = await Zitsraa.inviteInfo(linkgrup)
					if (!islink) return reply(from, 'Maaf link group-nya salah! ', id)
					if (isOwnerBot) {
					  await Zitsraa.joinGroupViaLink(linkgrup)
					    .then(async () => {
					      Zitsraa.sendMessage(from, 'Berhasil join grup via link!', text)
					    })
					} else {
					  let cgrup = await Zitsraa.s()
					  if (cgrup.length > groupLimit) return Zitsraa.reply(from, `Sorry, the groups is not valid `, id)
					  if (cgrup.size < memberLimit) return Zitsraa.reply(from, `Sorry, Bot wil not join if the group members do not exceed ${memberLimit} people`, id)
					  await Zitsraa.joinGroupViaLink(linkgrup)
					    .then(async () => {
					      reply('Berhasil join grup via link!')
					    })
					    .catch(() => {
					      reply('Gagal!')
					    })
					}
					break
					
case 'imoji':
  if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('emojinya mana gan?')
                    if (!isUser) return reply(mess.only.userB)
                    if (isLimit(sender)) return reply(limits.limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = emojiUnicode(Far).trim()
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/smoji?emoji=${teks}&apikey=WEMPYGANSS`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						Zitsraa.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break
case 'grouplist':
				case 'gruplist':
				  if (!isPublic) return reply(mess.only.publikG)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					Zitsraa.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${name} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: shizuka})
				break 
				case 'botstat': {
            Zitsraa.updatePresence(from, Presence.composing)
            const chatIds = await Zitsraa.getAllChatIds()
            const groups = await Zitsraa.getAllGroups()
            Zitsraa.sendText(from, `Status :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`)
            break
        }
					
				case 'cantikcek':
				case 'cekcantik':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: freply })
					break
					
case 'toptt':
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: freply, ptt:true})
						})
					break
					
					
					
				  case 'ownergrup':
				  case 'ownergroup':
				    if (!isPublic) return reply(mess.only.publikG)
               Zitsraa.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           Zitsraa.sendMessage(from, options, text, { quoted: freply } )
				break
				case 'leave': 
				  
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await Zitsraa.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break
				case 'setname':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                Zitsraa.groupUpdateSubject(from, `${body.slice(9)}`)
                Zitsraa.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, {quoted: freply})
                break
                case 'setdesc':
                  if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                Zitsraa.groupUpdateDescription(from, `${body.slice(9)}`)
                Zitsraa.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: freply})
                break
                
case 'apiteks':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/fire_maker?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, bufferxcz, image, {quoted: freply, caption: ' '+love})
					break
case 'metalteks':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/metal_maker?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, bufferxcz, image, {quoted: freply, caption: ' '+love})
					break
				case 'tts':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					 Zitsraa.sendMessage(from, `Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*`, text, {quoted: freply})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Zitsraa.sendMessage(from, 'Textnya mana gan?', text, {quoted: freply})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal gan:(')
							reply(mess.wait)
							Zitsraa.sendMessage(from, buff, audio, {quoted: freply, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender) 
					break  


case 'emo2img':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                testod = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${testod}
				`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ` ${testod}`})
                  await limitAdd(sender) 
                  break  
				
				
				
case 'slapimg':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                tesdo = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=apivinz&img1=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/${tesdo}.jpg&img2=https://img.tek.id/img/content/2019/06/01/16833/whatsapp-tak-lagi-bisa-simpan-foto-profil-C7fSwKVQ2i.jpg
				`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Whatsapp ${tesdo}`})
                  await limitAdd(sender) 
                  break  
				
				
case 'ytcoment':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                babio = `${body.slice(10)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${LolKey}&username=${pushname2}&comment=${babio}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg
				`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `YouTube Comment ${babio}`})
                  await limitAdd(sender) 
                  break  
				
case 'tolol':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                babio = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${LolKey}&name=${babio}
				`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Tolol  ${babio}`})
                  await limitAdd(sender) 
                  break  
				
				
case 'phcoment':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                babio = `${body.slice(10)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${pushname2}&msg=${babio}
				`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `PornHub Comment ${babio}`})
                  await limitAdd(sender) 
                  break  
				
case 'glitch':
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                tahtar3 = `${body.slice(8)}`
                tahtar = tahtar3.split("/")[0];
			    tahtar2 = tahtar3.split("/")[1];
                     const preff = `Usage: \n${prefix}glitch teks/teks\n\nEx :\n${prefix}glitch ini contoh/anjay`
					if (args.length < 1) return reply(preff)
                     buff = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${tahtar}&text2=${tahtar2}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Nih Anjim`})
                  await limitAdd(sender) 
                  break
case 'cantik':
					limitAdd(sender) 
				    isLimit(sender)
				    if (!isPublic) return reply(mess.only.publikG)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
                case 'ganteng':
					limitAdd(sender) 
				    isLimit(sender)
				    if (!isPublic) return reply(mess.only.publikG)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
					
					
case 'fakta':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					Zitsraa.sendMessage(from, fakta, text, {quoted: freply})
					await limitAdd(sender) 
					break
					
case 'fml':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.zeks.xyz/api/fml`, {method: 'get'})
					fmll = `*Fml* : ${anu.result}`
					Zitsraa.sendMessage(from, fmll, text, {quoted: freply})
					await limitAdd(sender) 
					break
					
					
case 'nickepep':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
				tesy = `Nick Epep
${anu.result}`
					Zitsraa.sendMessage(from, tesy, text, {quoted: freply})
					await limitAdd(sender) 
					break
					
					
					
					
					
case 'love':
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                tahtae = `${body.slice(6)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${tahtae}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Nih Anjim`})
                  await limitAdd(sender) 
                  break
				
case 'coffe':
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${tahtaq}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Nih Anjim`})
                  await limitAdd(sender) 
                  break
case 'glow':
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                tahtaw = `${body.slice(6)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tahtaw}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Nih Anjim`})
                  await limitAdd(sender) 
                  break
				case 'translation_idde':
				case 'trandslete':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return Zitsraa.sendMessage(from, 'Kode Bahasanya???', text, {quoted: freply})
				    if (args.length < 2) return Zitsraa.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: freply})
				    ts = body.slice(11)
				    suway1 = ts.split("|")[0]
				    suway2 = ts.split("|")[1]
				    anu = await fetchJson('https://api-translate.azharimm.tk/translate?engine=google&text='+suway2+'&to='+suway1).then(res => {
				    translate = `Kata : ${body.slice(11)}\n\nTranslate to ${suway1} : *${res.data.data.result}*\n\nTarget : *${res.data.data.targets[0]}**`
				    Zitsraa.sendMessage(from, translate, text, {quoted: freply})
				    })
				   await limitAdd(sender)
				   break 
				case 'ts':
				  case 'translate': 
		
				    if (args.length < 1) return Zitsraa.sendMessage(from, 'Kode Bahasanya???', text, {quoted: freply})
				    if (args.length < 2) return Zitsraa.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: freply})
		  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				    ts = body.slice(4)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/translate/auto/${kode}?apikey=${LolKey}&text=${teks}`)
				ytt = `「 *Translate* 」
					
*Kode:* ${anu.result.to}
*Text Ori:* ${anu.result.original}
*To ${kode}:* ${anu.result.traslated}`
			
		
				    reply(mess.wait)
				    ts = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, yts, text, {quoted: freply})
					await limitAdd(sender)
					break 
	            case 'setpp':
	              if (!isPublic) return reply(mess.only.publikG)
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	              
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await Zitsraa.downloadAndSaveMediaMessage(mek)
                    await Zitsraa.updateProfilePicture (from, media)
                    reply(mess.wait)
                    reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
                    
                    
                    
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (!isUser) return reply(mess.only.userB)
                    
                    if (args.length == 0) return reply('Teksnya mana um')
                    reply(mess.wait)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolKey}&text=${txt}`)
                    Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
                    break
                    
                    
                    
                    
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
					apakah = body.slice(1)
					const apakahh = ["Ya","Tidak","Ga tau"]
					const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: freply })
					break 
				case 'rate':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					rate = body.slice(1)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', text, { quoted: freply })
					break 
				case 'watak':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: freply })
					break 
				case 'hobby':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					hobby = body.slice(1)
					hob =["Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })
					break 
					

				case 'bisakah':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					bisakah = body.slice(1)
					const bisakahh = ["Bisa","Tidak Bisa","Ga tau"]
					const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: freply })
					break 
				
				case 'kapankah':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					kapankah = body.slice(1)
					const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
					const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
					Zitsraa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: freply })
					break 
					
case 'randomcat':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferkk = await getBuffer(anu.result.url)
					Zitsraa.sendMessage(from, bufferkk, image, {quoted: freply})
					break
		/*			case 'jadian':
if (!isPublic) return reply(mess.only.publikG)
                    if (!isGroup) return reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`

                    Zitsraa.sendMessage(from, sapa)

                    break*/
				case 'mlherolist':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/mlherolist?apikey=${VthearApi}`, {method: 'get'})
					icon = await getBuffer(anu.icon)
					Zitsraa.sendMessage(from, icon, image, {quoted: freply})
					break
					
case 'fakeid':
			if (!isUser) return reply(mess.only.userB)
           	
			anu = await fetchJson(`https://kagami-api.herokuapp.com/api/fakeid?key=Kagami`)
			Zitsraa.sendMessage(from, `${anu.data}`, text, {quoted: freply})
			reply(anu.data)
			await limitAdd(sender) 
			break  
					
					
					
				case 'truth':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
					ttrth = `${anu.Dare}`
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Zitsraa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
					await limitAdd(sender) 
					break 
				case 'dare':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					der = `${anu.Dare}`
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Zitsraa.sendMessage(from, tod, image, { quoted: freply, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender) 
					break 
					
					
case 'quote':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=apivinz`, {method: 'get'})
					ttrth = `${anu.result}`
					try{
					ppimg = await Zitsraa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					Zitsraa.sendMessage(from, ppimg, image, { caption: `*Quote*\n\n`+ ttrth, quoted: freply })
					await limitAdd(sender) 
					break 
		
		
		
		
		
		
case 'party':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: freply})
					break
case 'galaxtext':
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(11)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					bufasfer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, bufasfer, image, {quoted: freply})
					break
case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                Zitsraa.sendMessage(from, `Speed: ${latensi.toFixed(4)} _Second_`, text, { quoted: freply})
                    break
                case 'speed':
await costum(ping(prefix), text, FarhanGans, rmenu)
					break
                    break
                case 'tagme':
                  if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                  
                if (!isUser) return reply(mess.only.userB)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [nom] }
					}
					Zitsraa.sendMessage(from, tag, text, {quoted: freply}, rmenu)
					break
         case 'lirik':
           if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 

                case 'report':
                  if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return Zitsraa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: freply})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    Zitsraa.sendMessage('6281226770537@s.whatsapp.net', options, text, {quoted: freply})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                case 'request':
                  if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return Zitsraa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: freply})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    Zitsraa.sendMessage('6281226770537@s.whatsapp.net', options, text, {quoted: freply})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break

                    
case 'aesthetic':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					estetek = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=benbenz`)
					buffer = await getBuffer(estetek.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'aesthetic'})
					await limitAdd(sender)
					break 
                    
                    
                    
                    
				case 'memeindo':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: '.......'})
					await limitAdd(sender)
					break 
				case 'ssweb':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/sswebfull?apikey=${LolKey}&url=${teks}`)
					ssweb = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, ssweb, image, {quoted: freply})
					await limitAdd(sender)
					break 
				case 'nsfwloli':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isPublic) return reply(mess.only.publikG)
				    if (!isUser) return reply(mess.only.userB)
				      
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				      
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				      
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					
case 'chika':
                                    case 'ck':
        if (!isPublic) return reply(mess.only.publikG)
            await reply(from, `media sedang dikirim , tunggu sampe10-20 detik`)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/chika/main/chika.txt')
            .then(res => res.text())
            .then(body => {
                let chika = body.split('\n')
                let chikax = chika[Math.floor(Math.random() * chika.length)]
                Zitsraa.sendFileFromUrl(from, `https://piyobot.000webhostapp.com/${chikax}.mp4`, 'chika.mp4', 'Nih Bang')
                .then(() => console.log('Success sending Video'))
                limitAdd(serial)
            })
            .catch(() => {
                Zitsraa.reply(from, 'Ada yang Error!', id)
            })
            break
					
case '1cak':
				        try {
				    if (isBanned) return reply(mess.only.benned)    
			if (!isPublic) return reply(mess.only.publikG)
				    if (!isUser) return reply(mess.only.userB)
				      
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error..')
					}
					await limitAdd(sender)
					break
                            
				case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
			if (!isPublic) return reply(mess.only.publikG)
				    if (!isUser) return reply(mess.only.userB)
				      
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'hentai':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
			if (!isPublic) return reply(mess.only.publikG)
				    if (!isUser) return reply(mess.only.userB)
				      
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					
					
					
case 'snowwrite':
  if (!isPublic) return reply(mess.only.publikG)
					var gh = body.slice(11)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply(`Kirim perintah ${prefix}snowwrite teks1|teks2, contoh ${prefix}snowwrite aqulzz|galuh`)
                                        
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=${ZeksApi}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
                                        await limitAdd(sender)
					break
					
case 'hilih':
  if (!isPublic) return reply(mess.only.publikG)
					Zitsraa.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://kagami-api.herokuapp.com/api/hilih?kata=${body.slice(7)}&key=Kagami`, {method: 'get'})
					Zitsraa.sendMessage(from, anu,{quoted : freply})
					reply(anu.result)
					break
					
case 'wame':
  if (!isPublic) return reply(mess.only.publikG)
  Zitsraa.updatePresence(from, Presence.composing) 
      options = {
          text: `『 *SELF WHATSAPP* 』\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    Zitsraa.sendMessage(from, options, text, { quoted: freply } )
				break
case 'ttp2': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/ttp/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, sticker, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'anakharam': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://onlydevcity.xyz/docs/api/AnakHaramSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'heker': // Update By onlydevcityO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
					
				case 'hislih':
		  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break 
				case 'chord':
			 if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
					tels = body.slice(7)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break 
               case 'infogempa':
            if (!isPublic) return reply(mess.only.publikG)
               if (isBanned) return reply(mess.only.benned)    
               if (!isUser) return reply(mess.only.userB)
                 
               if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   reply(mess.wait)
                   gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
                   Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: gempa})
                   await limitAdd(sender) 
                   break 
                case 'kucing':
            if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					buff = await getBuffer(anu.result.url)
					Zitsraa.sendMessage(from, buff, image, { quoted: freply , caption: 'meong🐈'})
					await limitAdd(sender) 
					break 

case 'timer':
  if (!isPublic) return reply(mess.only.publikG)
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
// only grup fitur anime
              case 'anime':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
				case 'animekiss':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						Zitsraa.sendMessage(from, buffer, sticker, {quoted: freply})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					Zitsraa.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: freply })
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Zitsraa.sendMessage(from, nye, image, { caption: 'minato!!', quoted: freply })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					Zitsraa.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: freply })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					Zitsraa.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: freply })
					await limitAdd(sender)
					break 
					
case 'sayhs':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://anuz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender) 
					break 
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					Zitsraa.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: freply })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					Zitsraa.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: freply })
					await limitAdd(sender) 
					break 

				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					Zitsraa.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: freply })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					Zitsraa.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: freply })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					Zitsraa.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: freply })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					Zitsraa.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: freply })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					Zitsraa.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: freply })
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					Zitsraa.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: freply })
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(mess.only.benned)
				  
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					Zitsraa.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: freply })
					await limitAdd(sender) 
					break 
// akhir fitur anime

case 'ptl':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://kagami-api.herokuapp.com/api/ptlmp4?key=Kagami`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					pt =  n[Math.floor(Math.random() * n.length)];
					ptl = await getBuffer(pt)
					Zitsraa.sendMessage(from, ptl, image, { quoted: freply })
					await limitAdd(sender) 
					break 
case 'ntahlah':
					if (!isUser) return reply(mess.only.userB)      
					if (!isGroup) return reply(mess.only.group)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query={body.slice(11)}&apikey=${VthearApi}`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					tod = await getBuffer(uni)
					Zitsraa.sendMessage(from, tod, image, { caption: 'Inu!!', quoted: freply })
					break
case 'ptl2':
					anu = await fetchJson(`https://kagami-api.herokuapp.com/api/ptlmp4?key=Kagami`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break


				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					await limitAdd(sender) 
					break 
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                   anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, {method: 'get'})
                   masak = '==============================\n'
                   for (let msk of anu.results){
                   masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
                   }
                   reply(masak.trim())
                   await limitAdd(sender) 
                   break
                   
                   
case 'batle':
				if (!isUser) return reply(mess.only.userB)
                                
					gh = `${body.slice(7)}`
					reply(mess.wait)
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana kak?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/battlefield?text=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(data.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
					await limitAdd(sender) 
					break
                   
                  
case 'cerpen':
			if (!isUser) return reply(mess.only.userB)
           	
			anu = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${LolKey}`)
			Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
			reply(anu.result.cerpen)
			await limitAdd(sender) 
			break  
			
			
case 'ceritahoror':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ceritahoror?apikey=${LolKey}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                //   sex = await getBuffer(anu.result.thumbnail)
                   reply (mess.wait)
                   ceritah = `• *Judul:* ${anu.result.title}\n\n${anu.result.desc}`
                   Zitsraa.sendMessage(from, ceritah,text,{quoted: mek})
                   await limitAdd(sender) 
                   break 
			
			
			
			
			
               case 'cersex':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`http://api-iam.herokuapp.com/api/cersex`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.img)
                   reply (mess.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cersex}`
                   Zitsraa.sendMessage(from, sex, image, {quoted: freply, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'randomkpop':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   Zitsraa.sendMessage(from, buff, image, {quoted: freply})
                   break 
               case 'puisiimg':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   Zitsraa.sendMessage(from, pus, image, {quoted: freply})
                   break 
                  case 'playstore':
                  if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			     
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'nekopoi':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			     
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/nekopoisearch?apikey=${LolKey}&query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\Link: ${neko.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
case 'cekpremium':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days}  Hari ${cekExp.hours} Jam ${cekExp.minutes} Menit`)
			break 
  case 'addprem':
			if (!isOwner) return reply(mess.only.ownerB)
			expired = "30d"
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
			premium.push(pnom) 
			fs.writeFileSync('./database/json/userprem.json',JSON.stringify(premium))
			reply(`*「 PREMIUM ADD 」*\n\n*Name* : ${pnom}\n*Expired* : 30 DAY\n*thank for order premium*`)
		break
		case 'dellprem':
			if (!isOwner) return reply(mess.only.ownerB)
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = premium
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./database/json/userprem.json',JSON.stringify(arr))
			}
			}
			reply(`*「 PREMIUM DELETE 」*\n*Name* : ${hnom}\n*Expired* : Now\n*Thank for order premium back soon for buying again:D*`)
			break 

case 'listprem':
			if (!isUser) return reply(mess.only.userB)
			let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
			let nomorList = 0
			const deret = getAllPremiumUser()
			const arrayPremi = []
			for (let i = 0; i < deret.length; i++) {
			const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
			arrayPremi.push(getAllPremiumUser()[i])
			nomorList++
			listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
			}
			await reply(listPremi)
		break
  case 'addsay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database`)
						break
                   case 'saylist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `•${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": sayrandom}})
					break
                    case 'resetsay':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
			     	
			     case 'xvideos':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			     
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 

case 'apkmod':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
					gatauda = body.slice(7)
					anu = await fetchJson(`https://rfilesss109.000webhostapp.com/mod.php?apikey=xptn1`, {method: 'get'})
					reply(anu.result)
					break
					case 'okisstag':
		if (!isOwner) return reply('Kamu siapa?')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'wametag':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*wa.me/${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'kisstag':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			                      case 'reminder':
 if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)  
					if (!isGroup) return reply(mess.only.group)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					 Zitsraa.sendMessage(from, `*「 𝗥𝗲𝗺𝗶𝗻𝗱𝗲𝗿 」*
Reminder Aktif!!

    ◪  *Pesan :* ${ani}
    ◪  *Untuk :* ${anu} Tercinta >_<
    ◪  *Dari:* @${sender.split("@s.whatsapp.net")[0]}

𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙗𝙖𝙡𝙖𝙨𝙖𝙣 𝙣𝙮𝙖 𝙠𝙖𝙠 >_<
`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					 Zitsraa.sendMessage(from, `╭──「 𝗥𝗲𝗺𝗶𝗻𝗱𝗲𝗿 」────
│ ╭────────────
│ ├≽ •tepat waktu~@${sender.split("@s.whatsapp.net")[0]}
│ ╰────────────
├─────────────
│ ╭────────────
│ ├≽ •   *Pesan*: ${ani}
│ ╰────────────
╰──「 𝗛𝗔𝗡𝗭 𝗕𝗢𝗧」────
`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break
				case 'fb':
				  Zitsraa.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/facebook?apikey=${LolKey}url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					Zitsraa.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: freply})
					efbe = `Title: *${anu.result.title}*\Link: *${anu.result.link}*`
				//	tefbe = await getBuffer(anu.thumb)
				//	Zitsraa.sendMessage(from, efbe, image, {quoted: freply, caption: efbe})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: freply, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
			
			
			
case 'shadow':
                                        var gh = body.slice(7)
                                        var bacot = gh.split("|")[0];
                                        if (args.length < 1) return reply('teksnya mana um\nContoh: ${prefix}shadow NazwaCanss')
                             
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${bacot}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih kak gambarnya...'})
                                        await limitAdd(sender)
                                        break
		case 'instaimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com/')) return reply(mess.error.lv)
				reply(mess.wait)
					buffer = `https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${ZeksApi}`
					voss = await fetch(buffer)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					Zitsraa.sendMessage(from, await getBuffer(buffer.result.url), image, {quoted: mek, caption: mess.success})
					} else {
					reply(mess.error.bug)
					}
					 await limitAdd(sender)
					break
				case 'instavid':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com/')) return reply(mess.error.lv)
				reply(mess.wait)
					buffer = `https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${ZeksApi}`
					voss = await fetch(buffer)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					Zitsraa.sendMessage(from, await getBuffer(buffer.result.url), video, {quoted: mek, caption: mess.success})
					} else {
					reply(mess.error.bug)
					}
					 await limitAdd(sender)
					break

case 'covidcountry':
                   Zitsraa.updatePresence(from, Presence.composing) 
                   if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
                   data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
				    
				case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://api.xteam.xyz/dl/igs?nama=${instor}&apikey=${XteamKey}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.url) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				Zitsraa.sendMessage(from, '*'+hasil+'*', text, {quoted: freply})
				await limitAdd(sender)
				break 
				
case 'kusonimesearch':
		if (!isUser) return reply(mess.only.userB)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolKey}`, {method: 'get'})
                    get_result = get_result.result
                    text += `Title : ${get_result.title}\n`
                    text += `Japanese : ${get_result.japanese}\n`
                    text += `Genre : ${get_result.genre}\n`
                    text += `Seasons : ${get_result.seasons}\n`
                    text += `Producers : ${get_result.producers}\n`
                    text += `Type : ${get_result.type}\n`
                    text += `Status : ${get_result.status}\n`
                    text += `Total Episode : ${get_result.total_episode}\n`
                    text += `Score : ${get_result.score}\n`
                    text += `Duration : ${get_result.duration}\n`
                    text += `Released On : ${get_result.released_on}\n`
                    text += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    Zitsraa.sendMessage(from, buffer, image, { quoted: freply, caption: txt })
                    break
				
				
case 'tutuptime': //by Zitsraa-BOTシ︎
              Zitsraa.updatePresence(from, Presence.composing) 
		if (!user) return reply(mess.only.userB)
		if (!isGroupAdmins) return reply('Only Admin')
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					Zitsraa.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
case 'bukatime': //by Zitsraa-BOTシ
              Zitsraa.updatePresence(from, Presence.composing) 
		if (!user) return reply(mess.only.userB)
		if (!isGroupAdmins) return reply('Only Admin')
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *Semua Peserta* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, false);
					reply(close)
				}, timer)
				break
				
				
case 'ytpl':   
				// Fix Case By Yogi/Hans⛔
            
				reply(mess.wait)
				play = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: freply})
				await limitAdd(sender)
				break
		case 'play4':   
				// Fix Case By Yogi/Hans⛔
                 
				reply(mess.wait)
				played = body.slice(7)
				anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${played}`)
				if (anu.error) return reply(anu.error)
				iinfomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.id}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: iinfomp3})
				laguu = await getBuffer(anu.result.url)
				Zitsraa.sendMessage(from, laguu , audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: freply})
				await limitAdd(sender)
				break
				
case 'phsearch':
					if (!isUser) return reply(mess.only.userB)
	
					query = args.join(" ")
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/pornhubsearch?apikey=${LolKey}&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.added}\n\n=================\n`
					}
					reply(teks.trim())
					break
				
case 'stalkyt':
					if (!isUser) return reply(mess.only.userB)
	
					query = args.join(" ")
					anup = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolKey}&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anup.result) {
						teks += `*Channel* : ${i.channel_id}
*Channel Name* :${i.channel_name}
*About* : ${i.channel_about}
*Created* : ${i.channel_created}
=================\n`
					}
					reply(teks.trim())
					break
				
				
case 'shoope':
					if (!isUser) return reply(mess.only.userB)
	
					query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.data) {
						teks += `*Nama* : ${i.name}
*Harga* :${i.harga}
*Terjual* : ${i.terjual}
*Lokasi* : ${i.location}
*Cover* : ${i.cover}
*Stock*: ${i.stock}
*Informasi* : ${i.information}
*Deskripsi* : ${i.desc}
=================\n`
					}
					reply(teks.trim())
					break
				
case 'gplay':
					if (!isUser) return reply(mess.only.userB)
	
					query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${query}`, {method: 'get'})
					teks = '●●●●●●●●●●●\n'
					for (let i of anu.result) {
						teks += `*Nama* : ${i.title}
*Apid* :${i.appid}
*Dev* : ${i.developer}
*Price* : ${i.price}
*Rating* : ${i.rating}
*Url*: ${i.url}
●●●●●●●●●●●\n\n`
					}
					reply(teks.trim())
					break
				
				
				
					case 'ytsearch':
					if (!isUser) return reply(mess.only.userB)
	
					query = args.join(" ")
					anup = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolKey}&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anup.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
				if (isBanned) return reply(mess.only.benned)
                if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)    
				if (!isPremiun) return reply(mess.only.premiun)
                
linktod = args[0]
				
					anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${linktod}&APIKEY=${XteamKey}`, {method: 'get'})
					
					reply(mess.wait)
					buffer = await getBuffer(anu.result.video_url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.video_url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				reply(mess.wait)
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/filmapik?apikey=${LolKey}&query=${body.slice(6)}`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.result) {
				hasil += `• *Title:* ${film.title}\n• *Rilis Tahun:* ${film.release}\n• *description:* ${film.description}\n=========================\n`
				}
				reply(hasil.trim())
				await limitAdd(sender) 
					break 
case 'stalkig':
                   			if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					  
					if (isLimit(sender)) return reply(limitend(pushname2))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.username}_ \n *Nama??* : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following?* : _${anu.result.follow}_ \n *Jumlah Post?* : _${anu.result.post_count}_ \n *Biografi?? :* _${anu.result.biography}`
                    Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: hasil})
                    await limitAdd(sender)
			       break 
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					  
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return Zitsraa.sendMessage(from, 'Usernamenya mana gan?', text, {quoted: freply})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Kemungkinan username tidak valid')
					}
					await limitAdd(sender) 
					break  
//creator
				case 'nulis':
				case 'tulis':
				  Zitsraa.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					Zitsraa.sendMessage(from, nulis, image, {quoted: freply})
					await limitAdd(sender) 
					break  
					
case 'ytmp1':
					if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					yta = `「 *YOUTUBE MP3 DOWNLOADER* 」\n\n• Title : *${anu.result.title}*\n• *Size:* ${anu.result.size}\n• *Link:* https://www.youtu.be/${anu.result.id}n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.result.imgUrl)
					reply(mess.wait)
					buffer = await getBuffer(anu.result.UrlMp3)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: yta})
					Zitsraa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: freply, caption: 'Lugumu jelek gayn'})
					await limitAdd(sender) 
					break 
case 'attp':
			if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				Zitsraa.sendMessage(from, attp2, sticker, {quoted: freply})
				break
		case 'ttp':
		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp?apikey=${LolKey}&text=k${body.slice(5)}`)
				Zitsraa.sendMessage(from, ttp, sticker, {quoted: freply})
				break
					
					
				case 'ttp2':
		if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp?apikey=${LolKey}&text=${txt}`)
                    Zitsraa.sendMessage(from, buffer, sticker, { quoted: freply })
                    break
case 'ml':
if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&VthearApiikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'slide':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					Zitsraa.sendMessage(from, atytyd, video, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'cpaper':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2)) 
				cpaper = `${body.slice(8)}`
				buff = await getBuffer(`https://api.arugaz.my.id/api/photooxy/text-on-burn-paper?text=${cpaper}`, {method: 'get'})
				Zitsraa.sendMessage(from, buff, image, {quoted: freply})
				break 
				case 'cgame':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, buff, image, {caption: 'Nih kak', quoted: freply})
					await limitAdd(sender) 
					break 
				case 'cparty':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					part = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: freply})
					await limitAdd(sender) 
					break 
				case 'cstyle':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, buff, image, {caption: 'Nih kak', quoted: freply})
					await limitAdd(sender) 
					break 
				case 'cglass':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					glass = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: freply})
					await limitAdd(sender) 
					break 
					case 'croman':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isBanned) return reply(mess.only.benned)
                if (isLimit(sender)) return reply(limitend(pushname2))
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply})
                  await limitAdd(sender) 
                  break 
                  
case 'couple':
Zitsraa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.user)
if (!q.includes(' & ')) return  reply('Maaf format teks salah')
const kulo = q.substring(0, q.indexOf(' &') - 0)
const koe = q.substring(q.lastIndexOf('& ') + 1)
try {
data = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${aku}&pasangan=${kamu}`, {
  method: 'get'
})
yoi = `‣ *Nama* : ${kulo}
‣ *Pasangan* : ${koe}
‣ *Positif* : ${data.positif}
‣ *Negatif* : ${data.negatif}`
Zitsraa.sendMessage(from, yoi, text, {
  quoted: freply
})

} catch {
  reply(mess.ferr)
}
break
                  
                  
					case 'clove':
					  if (!isUser) return reply(mess.only.userB)
					    
					  if (isBanned) return reply(mess.only.benned)
					  if (isLimit(sender)) return reply(limitend(pushname2))
					  if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 Zitsraa.sendMessage(from, buff, image, {quoted: freply})
					 await limitAdd(sender)
					 break 
					 
case 'dompet':
				    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
const kantong = checkATMuser(sender)
				reply(mess.wait(pushname2, sender, kantong))
				break
				case 'buylimit':
				    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname2}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}`)
				} 
				break
				case 'transfer':
		 if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
					
					 
				case 'tahta':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.xteam.xyz/tahta?text=${tahta}&apikey=${XteamKey}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: `Harta Tahta ${tahta}`})
                  await limitAdd(sender) 
                  break  
                  
case 'katakatadilan':
			if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
			if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
			if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					case 'pantun':
			if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/pantun?apikey=${LolKey}`, {method: 'get'})
					reply(anu.result)
					break
					case 'quoterandom':
			if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=${LolKey}`, {method: 'get'})
					reply(anu.result)
					break
                  
                  
                  
case 'cthunder':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                thunder = `${body.slice(10)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.vhtear.com/thundertext?text=${thunder}&apikey=${VthearApi}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply})
                  await limitAdd(sender) 
                  break
case 'bcgp':
                    if (!isOwner) return reply(`perintah ini hanya dapat di gunakan oleh owner ${name}`)
					Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return reply('teksnya mana?')
					if (isMedia && !shizuka.message.videoMessage || isQuotedImage) {
				        if (!isGroup) return reply(mess.only.group)
				    	if (!isGroupAdmins) return reply(mess.only.admin)
				    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shizuka).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shizuka
						bcgc = await Zitsraa.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							Zitsraa.sendMessage(_.jid, bcgc, image, {caption: `*「 BROADCAST GROUP BY ${pushname2} 」*\n\n*Group* : ${groupName}\n*Pada Jam* :${jam}\n\n${name}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BROADCAST GROUP BY ${pushname2} 」*\n\n*Group* : ${groupName}\n${name}\n*Pada Jam*: ${jam}WIB\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break
                  
                case 'cbpink':
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                BP = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${BP}&apikey=${XteamKey}`, {method: 'get'})
                     Zitsraa.sendMessage(from, buff, image, {quoted: freply})
                  await limitAdd(sender) 
                  break  
			    case 'quotemaker':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			      
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
					await limitAdd(sender) 
					break 
                case 'cphlogo':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
					gh = `${body.slice(9)}`
					gbl1 = gh.split("/")[0];
					gbl2 = gh.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text1=${gbl1}&text2=${gbl2}&apikey=${XteamKey}`, {method: 'get'})
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
					await limitAdd(sender) 
					break 
case 'tanggaljadian':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply('tanggal berapa??\n_Example: !tanggaljadian 01/05/2003')
			tggl = body.slice(15)
			ja = tggl.split("/")[0];
			di = tggl.split("/")[1];
			an = tggl.split("/")[2];
			anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${ja}&bln=${di}&thn=${an}`, {method: 'get'})
			Zitsraa.sendMessage(from, anu.result.hasil, text, {quoted: freply})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break 
			case 'zodiak':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('_Example: !zodiak taurus')
				anu = await fetchJson(`https://api.vhtear.com/zodiak?query=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
				hzodiak = `• *Zodiak:* ${anu.result.zodiak}\n• *Nomer Keberuntungan:* ${anu.result.nomorKeberuntungan}\n• ${anu.result.ramalan}`
				reply(mess.wait)
				buff = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-48FfFR7hqlRBp4rZhVISyO9YRUvhTMnGw&usqp=CAU`)
				Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: hzodiak})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break
//akhir kreator
			    case 'jarak':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    Zitsraa.sendMessage(from, `${anu.result.data}`, text, {quoted: freply})
			    await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        Zitsraa.sendMessage(from, `${anu.result.data}`, text, {quoted: freply})
			        await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
			    case 'infonomor':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(infonomor)
			        await limitAdd(sender) 
			        break 
			        

case 'tebakumur':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apikey=${LolKey}&name=${body.slice(11)}`)
                    reply(mess.wait)
				//	buffer = await getBuffer(anu.result.profilehd)
                    hasil = `「 *Umur* 」
                    
• Nama : ${anu.result.name}
• Umur : ${anu.result.age}
      
   *Note :* _Jaga kesehatan ka_`
                  Zitsraa.sendMessage(from, hasil, text,{quoted: freply})
                    await limitAdd(sender) 
                    break


case 'suit':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=${XteamKey}`)
                    reply(mess.wait)
				//	buffer = await getBuffer(anu.result.profilehd)
                    hasil = `「 *SUIT* 」
                    
• Hasil : ${anu.hasil}

• Suit Kamu : ${anu.jawabanmu}
• Suit BOT  : ${anu.jawabanbot}

*Point* : ${anu.poin}`
                  Zitsraa.sendMessage(from, hasil, text,{quoted: freply})
                    await limitAdd(sender) 
                    break





case 'tebakangka':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`http://api.xteam.xyz/game/tebakangka?q=${body.slice(12)}&APIKEY=${XteamKey}`)
                    reply(mess.wait)
				//	buffer = await getBuffer(anu.result.profilehd)
                    hasil = `「 *Angka* 」
                    
• Jawaban mu  : ${anu.jawabanmu}
• Jawaban BOT : ${anu.jawabanbot}
      
   *Note :* ${anu.hasil} 
   *Poin :* ${anu.poin}`
                  Zitsraa.sendMessage(from, hasil, text,{quoted: freply})
                    await limitAdd(sender) 
                    break


case 'vslot':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
		truteh = await getBuffer(`https://i.ibb.co/MM6b65Y/d0fbc39734dc.jpg`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${XteamKey}`)
                    reply(mess.wait)
				//	buffer = await getBuffer(anu.result.profilehd)
                    hasil = `「 *Virtual SLOT* 」
                    
• Map : ${anu.map}
• Hasil : ${anu.hasil}
• Poin : ${anu.score}`
                  Zitsraa.sendMessage(from, truteh, image,{quoted: freply, caption: hasil})
                    await limitAdd(sender) 
                    break


			        
case 'igstalk':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`https://kagami-api.herokuapp.com/api/igs?username=${body.slice(9)}&key=Kagami`)
                    reply(mess.wait)
					
                    hasil = `「 *INSTAGRAM STALKER* 」
                    
• Link: https://www.instagram.com/${body.slice(9)}
• Fullname : ${anu.result.fullname}
• Followers : ${anu.result.follower}
• Following : ${anu.result.following}
• Jumlah Postingan: ${anu.result.timeline}
      
   Bio : ${anu.result.bio}`
   
buffer = await getBuffer(anu.result.profile)
                  Zitsraa.sendMessage(from, buffer, image,{quoted: freply, caption: hasil })
                    await limitAdd(sender) 
                    break
			        
			        
case 'stcsearch':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(11)}`)
                    reply(mess.wait)
					
                    hasil = `「 *Sticker STALKER* 」
                    
• Sticker : ${anu.sticker}`
   
buffer = await getBuffer(anu.thumb)
                  Zitsraa.sendMessage(from, buffer, image,{quoted: freply, caption: hasil })
                    await limitAdd(sender) 
                    break
			        
			        

case 'igstalk1':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${args[0]}?apikey=${LolKey}`)
                    reply(mess.wait)
					buffer = await getBuffer(anu.result.photo_profile)
                    hasil = `「 *INSTAGRAM STALKER* 」
                    
• Fullname : ${anu.result.fullname}
• Followers : ${anu.result.follower}
• Following : ${anu.result.following}
      
   Bio : ${anu.result.bio}`
                  Zitsraa.sendMessage(from, buffer, image,{quoted: mek, caption: hasil })
                    await limitAdd(sender) 
                    break


			   case 'igstalkS':
			   
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchJson(`https://api.zeks.xyz/api/iguser?q=${args[0]}&apikey=apivinz`, {method: 'get'})
                     buffer = await getBuffer(anu.result.profile_pic)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n╰─────────────────────`
                    Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: hasil})
                    
					await limitAdd(sender) 
                    break 
			    case 'mimpi':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			      
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`
			        Zitsraa.sendMessage(from, mimpi, text, {quoted: freply})
			        await limitAdd(sender) 
			       	break 
				case 'quotes':
				Zitsraa.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				  
				 data = fs.readFileSync('./zitsraa/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 Zitsraa.sendMessage(from, randQuote, text, {quoted: freply})
				await limitAdd(sender) 
					break 
				case 'fakta':
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				  
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					Zitsraa.sendMessage(from, fakta, text, {quoted: freply})
					await limitAdd(sender) 
					break 
				case 'katabijak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					Zitsraa.sendMessage(from, katabijak, text, {quoted: freply})
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              Zitsraa.sendMessage(from, tiktok, image, {quoted: freply})
			        await limitAdd(sender) 
			        break 
		    case 'darkjokes':
				Zitsraa.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				  
				reply(mess.wait)
				 data = fs.readFileSync('./zitsraa/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 Zitsraa.sendMessage(from, darkjokes, image, {quoted: freply, caption: '\`\`\`DARK JOKES\`\`\`'})
				await limitAdd(sender) 
				break  

case 'cecsbsan':   
							Zitsraa.updatePresence(from, Presence.composing) 
						 if (isBanned) return reply(mess.only.benned)    
						 if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isUser) return reply(mess.only.userB)
						reply(mess.wait)
						data = fs.readFileSync('./zitsraa/cecan.js');
						jsonData = JSON.parse(data);
						randIndex = Math.floor(Math.random() * jsonData.length);
						randKey = jsonData[randIndex];
						cecan = await getBuffer(randKey.result)
						Zitsraa.sendMessage(from, cecan, image, {quoted: freply, caption: '\`\`\`cecan nih xixi..\`\`\`'})
						await limitAdd(sender) 
								break
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				Zitsraa.sendMessage(from, '*'+hasil+'*', text, {quoted: freply})
				await limitAdd(sender)
				break 
				
			case 'katacinta':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
				katacin = `*${anu.result}*`
				Zitsraa.sendMessage(from, katacin, text, {quoted: freply})
				await limitAdd(sender) 
				break  
				
			case 'pasangan':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/jodoh/${sa}/${ngan}?apikey=${LolKey}`, {method: 'get'})
				buff = await getBuffer(anu.result.image)
					reply(mess.wait)
                    					ytt = `「 *Cloupe* 」
					
*Pasangan A:* ${sa}
*Pasanhan B:* ${ngan}
*Positif :* ${anu.result.positif}
*Negatif :* ${anu.result.negatif}`
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
			await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				Zitsraa.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: freply })
				await limitAdd(sender) 
				break  

			case 'pbucin':
			case 'persenbucin':
			case 'bucinpersen':
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				Zitsraa.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: freply })
				await limitAdd(sender) 
				break 
		    case 'map':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: `${body.slice(5)}`})
				await limitAdd(sender) 
				break 
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa gan?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, url2img, image, {quoted: freply})
					await limitAdd(sender)
					break 
					
case 'bacaanshalat':
                   bacaan = body.slice(14)
                   anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/bacaanshalat/${bacaan}.json`, {method: 'get'})
                   if (anu.error) return reply('Gak Bisa Ngambil Datanya Kak')
                   hasil = ` Bacaan : ${anu.name}\n\n${anu.arabic}\n${anu.latin}\n${anu.terjemahan}`
                   Zitsraa.sendMessage(from, hasil, text, {quoted: freply})
                   break
        case 'niatshalat':
                   niat = body.slice(12)
                   anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/niatshalat/${niat}.json`, {method: 'get'})
                   if (anu.error) return reply('Gak Bisa Ngambil Datanya Kak')
                   hasil = ` Niat : ${anu.name}\n\n${anu.arabic}\n${anu.latin}\n${anu.terjemahan}`
                   Zitsraa.sendMessage(from, hasil, text, {quoted: freply})
                   break
					
					
case 'kisahnabi':
                   tels = body.slice(11)
                   anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/kisahnabi/${tels}.json`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   hasil = ` Nabi : ${anu.name}\nTanggal Lahir : ${anu.thn_kelahiran}\nTempat Lahir : ${anu.tmp}\nUsia : ${anu.usia}\nKisah : ${anu.description}`
                   Zitsraa.sendMessage(from, hasil, text, {quoted: freply})
                   break
			   
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(` Info FROM : *${pushname2}*`+ teks +'「 zitsraa BOT 」', members_id, true)
					break
					
case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
Zitsraa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Zitsraa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await Zitsraa.sendMessage(from, options, text)
break


			 case 'oinfoall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(`Only Owner!`)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*Info :*  ${body.slice(10)} \n `+teks+'╚═ *「 Zitsraa BOT 」* ', members_id, true)
					break

			 case 'infoall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*Info :*  ${body.slice(9)} \n `+teks+'╚═ *「 Zitsraa BOT 」* ', members_id, true)
					break
					
					
case 'tag':
if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
         try {
					ppUrl = await Zitsraa.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					buffer = await getBuffer(ppUrl)
					members_id = []
					teks = (args.length > 1) ? body.slice(5).trim() : ''
					teks += '♡'
					for (let mem of groupMembers) {
						teks += `┣❥ @${mem.jid.split('@')[0]}\n♡`
						members_id.push(mem.jid)
					}
					Zitsraa.sendMessage(from, buffer, image,{detectLinks: false, quoted: freply, caption: teks})
					break
case 'memeen':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: '.......'})
					break
			    case 'kbbi':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break 
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/artinama?apikey=${LolKey}&nama=${body.slice(10)}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, text, {quoted: freply})
					await limitAdd(sender) 
					break 
					

					
					
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await Zitsraa.chats.all()
					Zitsraa.setMaxListeners(25)
					for (let _ of anu) {
						Zitsraa.deleteChat(_.jid)
					}
					reply(`\`\`\`Sukses delete all chat Hanz BOT\`\`\``)
					break
                                case 'bcgc':
					Zitsraa.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bcgc = await Zitsraa.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							Zitsraa.sendMessage(_.jid, bcgc, image, {caption: `*「 HANZ BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 HANZ BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break
					case 'exe':
Zitsraa.updatePresence(from, Presence.composing) 
	           if (!isOwner) return reply('Kamu siapa?')
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return Zitsraa.sendMessage(from, "Command Salah", text, { quoted: freply })
		           if (stdout) {
			       Zitsraa.sendMessage(from, stdout, text, { quoted: freply })
		           }
	           })
                  break 
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await Zitsraa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bc = await Zitsraa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Zitsraa.sendMessage(_.jid, bc, image, {caption: `[ HANZ Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ZItsraa BROADCAST 」*\n\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'edotense':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, di edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, di edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break
case 'istalk':
yolo = body.slice(8)
if (!isUser) return reply(mess.only.userB)

if (args.length < 1) return reply('*☒* Masukan username')
try {
hmm = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${yolo}?apikey=${LolKey}`)
reply(mess.wait)
buffer = await getBuffer(hmm.result.photo_profile)
hasil = `‣ *Username* : ${hmm.result.username}\n‣ *Fullname* : ${hmm.result.fullname}\n‣ *Pengikut* : ${hmm.result.followers}\n‣ *Mengikuti* : ${hmm.result.following}\n‣ *Bio* : ${hmm.result.bio}\n‣ *Link* : https://www.instagram.com/${hmm.result.username}\n‣ Follow : ${Ig}`
Zitsraa.sendMessage(from, buffer, image, {
  quoted: freply, caption: hasil
})

} catch {
  reply(mess.ferr)
}
break
            
            
            
case 'cogan':
  if (!isUser) return reply(mess.only.userB)
  
  Zitsraa.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Zitsraa.sendMessage(from, pok, image, {
quoted: freply, caption: `Wah ganteng kek gua`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'cogan':
  if (!isUser) return reply(mess.only.userB)
  
  Zitsraa.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Zitsraa.sendMessage(from, pok, image, {
quoted: freply, caption: `Wah ganteng kek gua`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'cecan':
  if (!isUser) return reply(mess.only.userB)
  
  tels = body.slice(5)
  Zitsraa.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewek cantik",
"cewe hijab",
"cewe rusia cantik",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Zitsraa.sendMessage(from, pok, image, {
quoted: freply, caption: `Gimana ?`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break



				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Zitsraa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break 

					
					
					
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					Zitsraa.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					Zitsraa.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					Zitsraa.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					Zitsraa.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
				
					break
					
	case 'addtime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					
					setTimeout( () => {
					Zitsraa.sendMessage(from, 'Bntr kak,Zitsraa mo berak dulu', text)
					}, 8000)
					setTimeout( () => {
					reply('Bentar...')
					}, 7000)
					setTimeout( () => {
					Zitsraa.groupAdd(from, [num])
					}, 6000)
					setTimeout( () => {
					Zitsraa.sendMessage(from, `Bismilah Add`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					Zitsraa.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
					
					
					
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					}
					break
					
case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Zitsraa.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Zitsraa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				
				case '1':
				  try {
				    buffer = fs.readFileSync(`.temp/audio/bukanp.mp3`)
			Zitsraa.sendMessage(from, buffer, audio,{mimetype: 'audio.mp4' , quoted: freply, ptt: true})
				  } catch {
				    reply('error')
				  }
				  break

			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				
case 'covidibebsndo': // Update By onlydevcityO & ItsmeikyXSec404	
				Zitsraa.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				anu= await fetchJson(`http://lolhuman.herokuapp.com/api/corona/indonesia?apikey=${LolKey}`, {method: 'get'})
				teks = '*COVID INDONESIA*\n\n'
				for (let i of anu.result) {
					teks += `*Positif : ${i.positif}\n*Sembuh* : ${i.sembuh}\n*SosialDist* : ${i.dirawat}\n*Meninggoy* : ${i.meninggal}`
				}
				reply(teks.trim())
				break
				
				
case 'istalk2': // Update By onlydevcityO & ItsmeikyXSec404
				if (args.length < 1) return reply(`username ig mana om?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/igstalk?u=${body.slice(9)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.data.profilehd)
				teks = `➸ *Fullname* : ${anu.result.data.fullname}\n*➸ Private :* ${anu.result.data.private}\n*➸ Verified? :* ${anu.result.data.verified}\n*➸ Bio :* ${anu.result.data.bio}\n*➸ Jumlah Follower :* ${anu.result.data.follower}\n*➸ Jumlah Following :* ${anu.result.data.following}\n*➸ Terhubung Ke FB? :* ${anu.result.data.conneted_fb}\n*➸ Video Post :* ${anu.result.data.videotimeline}\n*➸ Foto Post :* ${anu.result.data.timeline}`
				Zitsraa.sendMessage(from, buffer, image, {quoted:freply, caption: teks})
				break
				
				
		case 'covidglobal': // Update By onlydevcityO & ItsmeikyXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=onlyonedeveloper`)
				teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
				Zitsraa.sendMessage(from, teks, text, {quoted:freply, caption: 'Nih hasilnya kak...'})
				break
				
case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Zitsraa.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				
case 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Zitsraa.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				
				
			case 'listimg':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}* `
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
				
				
				
				
				
				case 'sjdnsjae':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, hapus pesan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.deleteMessage(from, mentioned)
					}
					break
					
case 'airtext':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return Zitsraa.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: freply})
                    buffer6 = await getBuffer(`https://api.vhtear.com/water_maker?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    Zitsraa.sendMessage(from, buffer6, image, {quoted: freply, caption: `${teks}`})
			     	break
			     case 'kuncitext':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return Zitsraa.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: freply})
                    buffer6 = await getBuffer(`https://api.vhtear.com/padlock?text1=${teks}&text2=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    Zitsraa.sendMessage(from, buffer6, image, {quoted: freply, caption: `${teks}`})
			     	break
			    case 'demote':
			      case 'dm' : 
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: 'https://tīnyurl.com/Zitsraa-BOTシ\nNih Fotonya mek..'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
				case 'zitsraa':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (args.length < 1) return reply('Pilih enable atau disable!')
					if (args[0] === 'aktif') {
						if (isPublic) return reply('Sudah Aktif')
						publik.push(from)
						fs.writeFileSync('./database/json/public.json', JSON.stringify(publik))
						reply(`Sukses Silahkan Ketik ${prefix}menu Untuk Fitur Bot`)
					} else if (args[0] === 'nonaktif') {
						publik.splice(from, 1)
						fs.writeFileSync('./database/json/public.json', JSON.stringify(publik))
						reply(`Sukses Sekarang Member Tidak Bisa Menggunakan Bot`)
					} else {
						reply('Pilih aktif / nonaktif')
					}
					break
case 'hanzprem':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Lu siapa??')
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] === 'on') {
						if (isPremtod) return reply('Sudah Aktif')
						premtod.push(from)
						fs.writeFileSync('./database/json/premtod.json', JSON.stringify(premtod))
						reply(`Sukses Silahkan Ketik ${prefix}menu Untuk Fitur Premium bot`)
					} else if (args[0] === 'off') {
						premtod.splice(from, 1)
						fs.writeFileSync('./database/json/premtod.json', JSON.stringify(premtod))
						reply(`Sukses Sekarang Member Tidak Bisa Menggunakan Premium BOT`)
					} else {
						reply('Pilih on / off')
					}
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`✓Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break

case 'leveling':
                   if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Enable = aktif\nDisable = nonaktif')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply('Suksess mengaktifan fitur level')
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply('Suksess menonaktifan fitur level')
                } else {
                    reply('Pilih enable = aktif,disable = nonaktif')
                }
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Udah aktif gan')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik !antilink on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link sudah on')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link sudah off')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong?apikey=${LolKey}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, caklontong, text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: freply }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, family, text, {quoted: freply }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
case 'chatdelete':
  case 'del' :
    case 'delete' :
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					Zitsraa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					
					case 'coli':
				case 'randombokep':
				Zitsraa.updatePresence(from, Presence.composing) 
				 
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				  
				 data = fs.readFileSync('./zitsraa/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 Zitsraa.sendMessage(from, randBokep, image, {quoted: freply, caption: randTeks})
				await limitAdd(sender) 
				break
			
			case 'randomhusbu':
				Zitsraa.updatePresence(from, Presence.composing) 
				 
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				  
				 data = fs.readFileSync('./zitsraa/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randhusbu = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 Zitsraa.sendMessage(from, randhusbu, image, {quoted: freply, caption: randTeks})
				await limitAdd(sender) 
				break



case 'amv':
				Zitsraa.updatePresence(from, Presence.composing) 
			 reply(`*Sedang di Prosess...*`)
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./Zitsraa/amv.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: freply})
				break

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Zitsraa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Zitsraa.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
//setting bot
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
					break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`Nama Bot berhasil di ubah menjadi : ${name}`)
					break 
case 'setreplyz':
					if (!isOwner) return reply(mess.only.ownerB)
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					zodiak = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${zodiak}`)
				break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					rmenu = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${rmenu}`)
				break 
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						media = await Zitsraa.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							Zitsraa.sendMessage(from, res.video, video, {quoted: freply, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
					
			case 'quran':
			 if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					Zitsraa.sendMessage(from, quran, text, {quoted: freply})
					await limitAdd(sender) 
					break 
	case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
       
     if (isLimit(sender)) return reply(limitend(pushname2))
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             Zitsraa.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: freply})
            }
            await limitAdd(sender)
            break 


case 'ytmp5':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
                                        if (!isUser) return reply(mess.only.userB)
     					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/yta?url=${args[0]}&apiKey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					Zitsraa.sendMessage(from, thumb, image, {quoted: freply, caption: teks})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: freply})
					break
					case 'ytmp6':
				if (args.length < 1) return reply('link YouTube nya mana?')
					tels = body.slice(7)				
					reply(mess.wait)
					buffer = await getBuffer(anu.thumb)
				 	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ytv?url=${tels}&apikey=BotWeA`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.userB)
					hasil = `*❏ Judul* : ${anu.title}\n*❏ Filesize* : ${anu.filesize}\n*❏ resolution* : ${anu.resolution}\n*❏ Tipe* : ${anu.ext}\n*❏ Link* : ${anu.result}`					
					Zitsraa.sendMessage(from, buffer, image,  {quoted: freply, caption: hasil})
					break	



         case 'pinterest':
  if (!isPublic) return reply(mess.only.publikG)
                    Zitsraa.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Zitsraa.sendMessage(from, pok, image, { quoted: freply })
					break
					
case 'shitpost':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				return reply(mess.wait)
				    meky = await fetchJson(`https://api.xteam.xyz/shitpost?APIKEY=${XteamKey}`, {method: 'get'})
					pook = await getBuffer(meky)
				    Zitsraa.sendMessage(from, pook, video, { quoted: freply})
				    await limitAdd(sender) 
				    break  
					
					
					
					
					
case 'leaderboard':
				case 'lb':
				if (!isUser) return reply(mess.only.userB)
			      
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let nomer = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nomer++
                        leaderboardlvl += `*[${nomer}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                    }
                    await reply(leaderboardlvl)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
		case 'jsholat':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(9)}`
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/sholat/${sholat}?apikey=${LolKey}`, {method: 'get'})
					reply(mess.wait)
					jsol = `*Jadwal SHALAT*
*Wilayah :* ${anu.result.wilayah}
*Tanggal :* ${anu.result.tanggal}


⚡Imsyak : ${anu.result.imsak} WIB
⚡Subuh : ${anu.result.subuh} WIB
⚡Dzuhur : ${anu.result.dzuhur}WIB
⚡Ashar : ${anu.result.ashar} WIB
⚡Maghrib : ${anu.result.maghrib} WIB
⚡Isya : ${anu.result.isya} WIB
⚡Dhuha : ${anu.result.dhuha} WIB


*Note* : _Jangan lupa solat borr.._
_Sholat itu ibadah_`
					Zitsraa.sendMessage(from, jsol, text, {quoted: freply})
					await limitAdd(sender) 
					break 
case 'xxx':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   if (!isPremiun) return reply('premiumin tod!')
			   if (isLimit(sender)) return reply(limits.limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(5)
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/xnxxsearch?apikey=${LolKey}&query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `• Title: ${bokep.title}
 Upload : ${bokep.uploader}
 Durasi: ${bokep.duration}
 Link: ${bokep.link}
 ===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break
case 'wasted':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  Zitsraa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					Zitsraa.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: freply})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'pelangi':
				case 'rainbow':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  Zitsraa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					Zitsraa.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: freply})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
            case 'jadwaltv':
                if (isBanned) return reply(mess.wait.benned)
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (args.length < 1)return reply('Nama Channelnya??')
                reply(mess.wait)
                jadwaltv = `${body.slice(10)}`
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${jadwaltv}`, {method: 'get'})
                jtv = `${anu.result}`
                Zitsraa.sendMessage(from, jtv, text, {quoted: freply})
                await limitAdd(sender)
               	break  
                
           case 'jadwaltvnow':
                if (isBanned) return reply(mess.wait.benned)
                if (!isUser) return reply(mess.only.userB)
                  
                if (isLimit(sender)) return reply(limitend(pushname2))
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`, {method: 'get'})
                tvnow = `Jadwal Tv Sekarang Pada Jam : *${anu.result.jam}* Adalah: \n *${anu.result.jadwalTV}`
                Zitsraa.sendMessage(from, tvnow, text, {quoted: freply})
                await limitAdd(sender) 
                break 

// premium user
   case 'joox':
  if (!isUser) return reply(mess.only.userB)
  if (!isPremiun) return reply('Mode premium Aktifin Ngab')
  if (args.length < 1) return reply('Masukan judul lagu')
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {
method: 'get'
  })
  infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
  buffer = await getBuffer(data.result.thumb)
  lagu = await getBuffer(data.result.mp3)
  Zitsraa.sendMessage(from, buffer, image, {
quoted: freply, caption: infomp3
  })
  Zitsraa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp3', filename: `${data.result.title}.mp3`, quoted: freply
  })
  
  } catch {
    reply(mess.ferr)
  }
  break  
                
          case 'snack':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPremiun) return reply(mess.only.premiun)
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                Zitsraa.sendMessage(from, bufferddd, image, {quoted: freply, caption: sck})
                Zitsraa.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: freply})
                await limitAdd(sender) 
                break  
                
                
                
                case 'asupan':
       if (isBanned) return reply(mess.only.benned)
                if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)    
				if (!isPremiun) return reply(mess.only.premiun)
                
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/asupan?apikey=${LolKey}`, {method: 'get'})
			
			/*		ytt = `「 *INSTAGRAM* 」
					
*Nama:* ${anu.result.name}
*User:* ${anu.result.username}
*Like:* ${anu.result.likes}
*Caption:* ${anu.result.caption}`*/
			
					reply(mess.wait)
				buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, video, {quoted: freply})
					await limitAdd(sender) 
					break 

                
case 'githubstalk':
       if (isBanned) return reply(mess.only.benned)
                if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)    
				if (!isPremiun) return reply(mess.only.premiun)
              
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LolKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *Github STALK* 」
					
*Url:* ${anu.result.url}
*Nama:* ${body.slice(13)}
*Follower:* ${anu.result.followers}
*Following:* ${anu.result.following}
*Location:* $${anu.result.location}
*Bio:* ${anu.result.bio}
`
					 buff = await getBuffer(anu.result.avatar)
					reply(mess.wait)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					await limitAdd(sender)
                break
                
case 'ig':
  if (!isUser) return reply(mess.only.userB)
  
  reply(mess.wait)
  inil = args[0]
  anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${inil}&apikey=apivinz`, {method:'get'})
  ts = `    *INSTAGRAM*
  
 •Caption : ${anu.result.caption}
 •Type : ${anu.result.type}
 •Source : ${anu.result.url}
 `
 buffer = await getBuffer(anu.result.url)
  Zitsraa.sendMessage(from, ts, text, {quoted: freply})
  Zitsraa.sendMessage(from, buffer, video, {caption : ts ,quoted: freply})
  break
  
                case 'ytmp4':
       if (isBanned) return reply(mess.only.benned)
                if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)    
				if (!isPremiun) return reply(mess.only.premiun)
                
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 * 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
*Source download:*
	 ${anu.url}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 

				case 'ytmp3':
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
*Source download:*
	 ${anu.url}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Zitsraa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				await limitAdd(sender)
				break

case 'cyberpunk':
  
  Zitsraa.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Zitsraa.sendMessage(from, pok, image, {
quoted: freply
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
					
case 'itsme':
  if (!isPublic) return reply(mess.only.publikG)
  if (!isUser) return reply(mess.only.userB)
  try {
ppimg = await Zitsraa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nama* : ${pushname2}
  ‣ *Nomor* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  Zitsraa.sendMessage(from, its, image, {
quoted: freply, caption: teks
  })
  
  break
case 'pin':
  if (!isPublic) return reply(mess.only.publikG)
  if (!isPremiun) return reply(mess.only.premiun)
				if (!isUser) return reply(mess.only.userB)
    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('Format link salah, gunakan link pinterest')
  reply(mess.wait)
  play = body.slice(5)
  try {
  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)
  if (anu.error) return reply(anu.error)
  n = JSON.parse(JSON.stringify(anu.result.data));
  lagu = await getBuffer(anu.result)
  Zitsraa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: freply
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

  
case 'joox2':
  if (!isPublic) return reply(mess.only.publikG)
  if (!isPremiun) return reply(mess.only.premiun)
				if (!isUser) return reply(mess.only.userB)
  if (args.length < 1) return reply('Masukan judul lagu')
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {
method: 'get'
  })
  infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
  buffer = await getBuffer(data.result.thumb)
  lagu = await getBuffer(data.result.mp3)
  Zitsraa.sendMessage(from, buffer, image, {
quoted: freply, caption: infomp3
  })
  Zitsraa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: freply
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
  
case 'husbu':
				Zitsraa.updatePresence(from, Presence.composing) 
 			if (!isUser) return reply(mess.only.userB)
 	if (!isAnime) return reply(' Harus Mengaktifkan Mode Anime')
				 data = fs.readFileSync('./zitsraa/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                Zitsraa.sendMessage(hasil, image, mek, '\`\`\`Husbu\`\`\`')
  
           case 'play3':
             if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
				if (!isPremiun) return reply(mess.only.premiun)
				if (!isUser) return reply(mess.only.userB)
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${play}&apikey=${XteamKey}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│*• Judul:* ${anu.result.title}\n│*• Source:* ${anu.result.source}\n│*• Ukuran:* ${anu.result.size}\n│\n│*TUNGGU SEBENTAR LAGI DIKIRIM\n│ MOHON JANGAN SPAM YA BEB*\n╰─────────────────────`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
                Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: freply})
                await limitAdd(sender) 
                break 
                
case 'playmp3':
                if (isBanned) return reply(mess.only.benned)    
                reply(mess.wait)
                play = body.slice(9)
                try {
				anu = await fetchJson(`https://kagami-api.herokuapp.com/api/play?query=${play}&key=Kagami`, {method: 'get'})
                infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│*• Judul:* ${anu.result.title}\n│*• Source:* ${anu.result.video_url}\n│*• Durasi:* ${anu.result.duration}\n│*• Upload Date:* ${anu.result.upload}\n│*• view:* ${anu.result.views}\n│*TUNGGU SEBENTAR LAGI DIKIRIM\n│ MOHON JANGAN SPAM YA BEB*\n╰─────────────────────`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.yta)
                Zitsraa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
			}
                await limitAdd(sender) 
				break
                
case 'play':   
                   if (isBanned) return reply(mess.only.benned)
                if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)    
				if (!isPremiun) return reply(mess.only.premiun)
                reply(mess.wait)
				play = body.slice(6)
				anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${play}&APIKEY=${XteamKey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Lagu Ditemukan!!!*
				
Judul : ${anu.judul}
Size : ${anu.size}
Source : ${anu.source}
				
*Wait Kak....*\n*Zitsraa sedang mengirim lagu nya...*


*_Link Download nya kaka_*
Source : ${anu.url}`
				buffer = await getBuffer(anu.thumbnail)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				lagu = await getBuffer(anu.url)
				Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				await limitAdd(sender)
				break
                
                
case 'playgg':
                if (isBanned) return reply(mess.only.benned)
                if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)    
				if (!isPremiun) return reply(mess.only.premiun)
                reply(mess.wait)
                play = body.slice(6)
                try {
				anj = await fetchJson(`https://kagami-api.herokuapp.com/api/play?query=${play}&key=Kagami`, {method: 'get'})
                infomp3 = `「 *Play* 」
                
  *•Judul:* ${anj.result.title}
  *•View:* ${anj.result.views}
  *•Source:* ${anj.result.video_url}
                
 _Send Audio..._`
                buffer = await getBuffer(anj.result.thumbnail)
                lagu = await getBuffer(anj.result.yta)
                
Zitsraa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
			} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
			}
                await limitAdd(sender) 
				break

                
case 'ytplay':		
  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isPremiun) return reply(mess.only.premiun)
				if (!isUser) return reply(mess.only.userB)
				Zitsraa.updatePresence(from, Presence.recording) 
				reply(mess.wait)
				playmp3 = body.slice(9)
				anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${playmp3}&apikey=${VthearApi}`, {method: 'get'})
				infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│ *• Judul:* ${anu.result.title}\n│ *• Durasi:* ${anu.result.duration}\n│ *•Size:* ${anu.result.duration}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM YA BEB*\n╰─────────────────────`
				buffer = await getBuffer(anu.result.image)
				lagu = await getBuffer(anu.result.mp3)
				Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: freply, ptt: true})
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})		
					await limitAdd(sender) 
			break
            case 'smule':
              if (!isPublic) return reply(mess.only.publikG)
	       if (isBanned) return reply(mess.only.benned)
	       if (!isPremiun) return reply(mess.only.premiun)
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					Zitsraa.sendMessage(from, thumb, image, {quoted: freply, caption: teks})
					buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: freply, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break  
  case 'tovid':
Zitsraa.updatePresence(from,
  Presence.composing)
  
  if (!isPublic) return reply(mess.only.publikG)
if (!isQuotedSticker) return reply('*☒* Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Zitsraa.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('Gagal, pada saat mengkonversi sticker ke Video')
  buffer = fs.readFileSync(ran)
  Zitsraa.sendMessage(from, buffer, video, {
quoted: freply, caption: 'Buat apa sii..'
  })
  fs.unlinkSync(ran)
})
break
case 'cekggprem':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPrem) return reply('*(👉`>`) yaa haha... Wahyu* \n woy sob! Kata ilham, Harus Upgrade Ke Premium Dulu Ngab :/ \n\n\n*Caranya ketik : /owner* \nNah Kalau Udah, Chat Gih Owner Aku bilang "bang gw mau Upgrade ke vip" nah gitu! ngab :v\n\nSoalnya Fitur Ini Khusus User Premium, Gak Semua Fitur Gratis Ngab :v Harga Kouta Internet Mahal, Bot Aktif Juga Menggunakan Internet' ,text, { quoted: freply })
					me = Zitsraa.user
					uptime = process.uptime()
					Zitsraa.sendMessage(from,  `*──────────────────*\n*Nama bot:* *${me.name}*\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Nomor:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ACTIVE*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n*──────────────────*` , text, { quoted: freply, })
					break


case 'asupvgan':
  if (!isPublic) return reply(mess.only.publikG)
if (isBanned) return reply(mess.only.benned)    
				if (!isPremiun) return reply(mess.only.premiun)
				if (!isUser) return reply(mess.only.userB)
				
				  
				reply(mess.wait)
				 data = fs.readFileSync('./zitsraa/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 Zitsraa.sendMessage(from, asupan, video, {quoted: freply, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})
				await limitAdd(sender) 
				break  
				
				
case 'asupehhean':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				return reply(mess.error.lv)
				    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/asupan?apikey=${LolKey}`, {method: 'get'})
				    buffer = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: freply, caption: 'Asupan Gan'})
					await limitAdd(sender) 
					break 
				    
				
				
				
case 'ptll':
						if (!isGroup) return reply(from, 'Perintah ini hanya bisa di gunakan dalam group!',)
						const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
						let pep = pptl[Math.floor(Math.random() * pptl.length)]
					   Zitsraa.sendMessage(from, pptl,image,{caption: '*Nih*\n\n'+pep, quoted: freply })
						break
case 'spank':
					if (!isPublic) return reply(mess.only.publikG)
			if(!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anuo = await fetchJson(`https://nekos.life/api/v2/img/spank`, {method: 'get'})
					narutod = JSON.parse(JSON.stringify(anu));
					tod =  naru[Math.floor(Math.random() * narutod.length)];
					nyet = await getBuffer(to)
					Zitsraa.sendMessage(from, nyet, image, { caption: '*Jangan lupa coli ya*', quoted: freply })
					await limitAdd(sender)
					break
				case 'wiki':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
                    if (args.length < 1) return reply('teks nya mana om?')
                    reply(mess.wait)
                   wiki = `${body.slice(6)}`
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    wikii = `${anu.result}`
                    Zitsraa.sendMessage(from, wikii, text, {quoted: freply})
                   await limitAdd(sender) 
                   break  
                   
               case 'pastebin':
                 if (!isPublic) return reply(mess.only.publikG)
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
                   await limitAdd(sender) 				
                   break 
		case 'bpfont':
		  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			  
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
		case 'spamcall':
		  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			  
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			Zitsraa.sendMessage(from, `${anu.result.logs}`, text, {quoted: freply})
			await limitAdd(sender) 
			break  
		case 'spamgmail':
		  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			  
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			Zitsraa.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: freply})
			await limitAdd(sender) 
			break  
		case 'quransurah':
		  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			  
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`)
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.ayat) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			await limitAdd(sender) 
			break 
			case 'quranlist':
			  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			  
			if (isLimit(sender)) return reply(limitend(pushname2))
			anu = await fetchJson(`https://api.vhtear.com/quranlist?&apikey=${VthearApi}`, {method: 'get'})
			list = ''
			for (let sur of anu){
			list = `Nomer: ${sur.list}\n`
			}
			reply(list.trim())
			break
		case 'bitly':
		  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			  
			if (isLimit(sender)) return reply(limitend(pushname2))
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${bitlyy.result}`
			Zitsraa.sendMessage(from, anu, text, {quoted: freply})
			await limitAdd(sender) 
			break  
			case 'textstyle':
			  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			  
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			
			
		case 'jamdunia':
		  if (!isPublic) return reply(mess.only.publikG)
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			  
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			Zitsraa.sendMessage(from, wtime, text, {quoted: freply})
			await limitAdd(sender) 
			break  
			
		 case 'tomp3':
		   if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				  
                	Zitsraa.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: freply})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 

				case 'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    Zitsraa.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(enmedia)
					await Zitsraa.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya🙂')
					break

// Fitur Defacer

				case 'dorking':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					Zitsraa.sendMessage(from, hasil, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'encode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				Zitsraa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
				await limitAdd(sender) 
				break 
case 'pubg':
  if (!isPublic) return reply(mess.only.publikG)
					Zitsraa.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana gan??')
				 	if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzApi}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					Zitsraa.sendMessage(from, cpubg, image, {quoted: freply})
					await limitAdd(sender) 
					break  
					case 'cml':
					case 'ml':
					Zitsraa.updatePresence(from, Presence.composing) 
					if (!isPublic) return reply(mess.only.publikG)
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${VthearApi}`, {method: 'get'})
					Zitsraa.sendMessage(from, buffer, image, {quoted: freply})
					await limitAdd(sender) 
					break  
					case 'gta':
				
              	   			 if (args.length < 1) return reply(`Contoh ${prefix}gta hanz|ganz`)
                    			hm = `${body.slice(5)}`
                    			text1 = hm.split("|")[0];
                    			text2 = hm.split("|")[1];                    
                    			glitch = await getBuffer(`http://lolhuman.herokuapp.com/api/gtapassed?apikey=${LolKey}&text1=${text1}&text2=${text2}`, {method: 'get'})
                    			Zitsraa.sendMessage(from, glitch, image, {quoted: freply, caption: 'nih mek'})
			     		await limitAdd(sender) 
			     		break
			     		
			     		
			     		
case 'meme':

              	 		 if (args.length < 1) return reply(`Contoh ${prefix}meme ini|contol`)
if (!isQuotedImage) return reply('Reply imagenya')
cot = `${body.slice(6)}`
                    			texttop = cot.split("|")[0];
                    			textbot = cot.split("|")[1];                    
                    			memtod = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${texttop}&textbottom=${textbot}`, {method: 'get'})
                    			Zitsraa.sendMessage(from, memtod, image, {quoted: freply, caption: 'nih mek'})
			     		await limitAdd(sender) 
			     		break
			     		
			     		
			     		
  case 'wolflogo':
  if (!isPublic) return reply(mess.only.publikG)
				
              	   			 if (args.length < 1) return reply(`Contoh ${prefix}wolflogo hanz/ganz`)
                    			hm = `${body.slice(8)}`
                    			text1 = hm.split("/")[0];
                    			text2 = hm.split("/")[1];                    
                    			wolf = await getBuffer(`https://api.xteam.xyz/textpro/wolflogogalaxy?text=${text1}&text2=${text2}&APIKEY=7ba65de0de0c0088`, {method: 'get'})
                    			Zitsraa.sendMessage(from, wolf, image, {quoted: freply, caption: 'nih mek'})
			     		await limitAdd(sender) 
			     		break
				
					case 'hashidentifier':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  Zitsraa.sendMessage(from, hasilhash, text, {quoted: freply})
					  await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

                
                case 'addbucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
ppimg = 'https://i.ibb.co/Sr8hC0g/3d10fba6bf39.jpg'
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                 
                    Zitsraa.sendMessage(from, '*'+hasil+'*', text,{quoted: freply})
                    await limitAdd(sender)
            break
            
         case 'moddroid':
       if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: `${teks}`})
			await limitAdd(sender)
			break
			
case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) 
					fetchJson(`https://tobz-api.herokuapp.com/api/simsimi?text=${teks}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
			
case 'nangis':
		   Zitsraa.updatePresence(from, Presence.composing)
		   
		   if (!isPublic) return reply(mess.only.publikG)
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.stikga())
					buffer = fs.readFileSync(rano)
					Zitsraa.sendMessage(from, buffer, sticker, {quoted: freply})
					fs.unlinkSync(rano)
					
					})
					break
		case 'happymod':
		  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				  
				if (isLimit(sender)) return reply(limitend(pushname2))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: `${teks}`})
			await limitAdd(sender)
			break
				default:
				

					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf Kak ${pushname2}...\nCommand *${prefix}${command}* Tidak Terdaftar Di Dalam Database *${prefix}menu*`)
                  }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[HANZ BOT]','aqua'), 'Command ini Hanya Chat!', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
