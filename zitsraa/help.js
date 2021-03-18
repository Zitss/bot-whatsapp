// menu fitur bot
const help = (prefix, instagram, getLevelingLevel, getLevelingXp, sender, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `┌──「 *Zitsraa* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname2}
├ XP : ${getLevelingXp(sender)}
├ LEVEL : ${getLevelingLevel(sender)}
├ USER BOT : ${user.length}
│
├「 *Readmore* 」
│
├ ${prefix}report
├ ${prefix}info
├ ${prefix}donasi
├ ${prefix}owner
├ ${prefix}speed
├ ${prefix}verify
├ ${prefix}limit
├ ${prefix}totaluser
├ ${prefix}blocklist
├ ${prefix}banlist
├ ${prefix}premiumlist
├ ${prefix}bahasa
├ ${prefix}leaderboard
│
├「 *Media* 」
│
├ ${prefix}tiktokstalk 
├ ${prefix}igstalk 
├ ${prefix}instavid 
├ ${prefix}instaimg 
├ ${prefix}instastory
├ ${prefix}ssweb
├ ${prefix}url2img
├ ${prefix}tiktok    
├ ${prefix}fototiktok
├ ${prefix}kbbi
├ ${prefix}wait
├ ${prefix}trendtwit
├ ${prefix}google 
│
├「 *MENU* 」
│
├ ${prefix}quotemaker 
├ ${prefix}nulis 
├ ${prefix}croman 
├ ${prefix}slide
├ ${prefix}tahta 
├ ${prefix}party
├ ${prefix}galaxtext
├ ${prefix}metalteks
├ ${prefix}apiteks
├ ${prefix}airtext
├ ${prefix}kunciteks
├ ${prefix}cglass 
├ ${prefix}cstyle 
├ ${prefix}cgame 
├ ${prefix}clove 
├ ${prefix}cparty 
├ ${prefix}glow
├ ${prefix}tts 
├ ${prefix}glitch
├ ${prefix}love
├ ${prefix}coffe
├ ${prefix}cpaper 
├ ${prefix}stiker
├ ${prefix}gifstiker
├ ${prefix}toimg
├ ${prefix}tomp3
├ ${prefix}ocr
├ ${prefix}freefire
├ ${prefix}wetglass
├ ${prefix}multicolor3d
├ ${prefix}watercolor
├ ${prefix}luxurygold
├ ${prefix}galaxywallpaper
├ ${prefix}lighttext
├ ${prefix}beautifulflower
├ ${prefix}puppycute
├ ${prefix}royaltext
├ ${prefix}heartshaped
├ ${prefix}galaxystyle
├ ${prefix}greenneon
├ ${prefix}glossychrome
├ ${prefix}greenbush
├ ${prefix}metallogo
├ ${prefix}noeltext
├ ${prefix}textcake
├ ${prefix}wooden3d 
├ ${prefix}starsnight 
├ ${prefix}wooden3d 
├ ${prefix}textbyname 
├ ${prefix}writegalacy 
├ ${prefix}glittergold
├ ${prefix}hologram3d
├ ${prefix}birthdaycake
├ ${prefix}galaxybat 
├ ${prefix}snow3d 
├ ${prefix}goldplaybutton 
├ ${prefix}silverplaybutton 
│
├「 *ANIME* 」
│
├ ${prefix}modeanime 
├ ${prefix}neonime 
├ ${prefix}naruto   
├ ${prefix}minato
├ ${prefix}kaguya
├ ${prefix}boruto
├ ${prefix}hinata
├ ${prefix}sakura
├ ${prefix}sasuke
├ ${prefix}toukachan
├ ${prefix}rize
├ ${prefix}akira
├ ${prefix}itori
├ ${prefix}kurumi
├ ${prefix}miku
├ ${prefix}anime
├ ${prefix}animecry
├ ${prefix}animekiss
├ ${prefix}randomhusbu
│
├「 *CARTOON* 」
│
├ ${prefix}doraemon
├ ${prefix}boboiboy
├ ${prefix}boboiboy2
├ ${prefix}spongebob
├ ${prefix}frozen
│
├「 *MENU GROUP* 」
│
├ ${prefix}antilink 
├ ${prefix}welcome 
├ ${prefix}grup
├ ${prefix}bukatime
├ ${prefix}tutuptime
├ ${prefix}leveling 
├ ${prefix}ownergrup
├ ${prefix}bacotlist
├ ${prefix}bacot
├ ${prefix}tag      
├ ${prefix}kisstag
├ ${prefix}reminder
├ ${prefix}setpp
├ ${prefix}Level
├ ${prefix}mining
├ ${prefix}infogc
├ ${prefix}add
├ ${prefix}kick @tag
├ ${prefix}kicktime
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}setname
├ ${prefix}setdesc
├ ${prefix}linkgrup
├ ${prefix}tagme
├ ${prefix}hidetag
├ ${prefix}wametag
├ ${prefix}tagall
├ ${prefix}infoall
├ ${prefix}fitnah
├ ${prefix}listadmin
│
├「 *ADMIN* 」
│
├ ${prefix}nsfw
├ ${prefix}nsfwloli
├ ${prefix}nsfwblowjob
├ ${prefix}nsfwneko
├ ${prefix}nsfwtrap
├ ${prefix}hentai
├ ${prefix}simih
├ ${prefix}hanz
│
├「 *FUN* 」
│
├ ${prefix}anjing
├ ${prefix}kucing
├ ${prefix}testime
├ ${prefix}hilih
├ ${prefix}apakah
├ ${prefix}kapankah
├ ${prefix}bisakah
├ ${prefix}rate
├ ${prefix}slot
├ ${prefix}ganteng
├ ${prefix}cantik
├ ${prefix}babi
├ ${prefix}watak
├ ${prefix}hobby
├ ${prefix}infogempa
├ ${prefix}infonomor
├ ${prefix}quotes
├ ${prefix}truth
├ ${prefix}dare
├ ${prefix}katabijak
├ ${prefix}fakta
├ ${prefix}darkjokes
├ ${prefix}bucin
├ ${prefix}pantun
├ ${prefix}katacinta
├ ${prefix}jadwaltvnow
├ ${prefix}hekerbucin
├ ${prefix}katailham
│
├「 *OTHERS* 」
│
├ ${prefix}jarak 
├ ${prefix}info
├ ${prefix}infobot
├ ${prefix}pbot
├ ${prefix}wame
├ ${prefix}liststik
├ ${prefix}cogab
├ ${prefix}cecan
├ ${prefix}listvn
├ ${prefix}listimg
├ ${prefix}itsme
├ ${prefix}made
├ ${prefix}listzodiak
├ ${prefix}translate 
├ ${prefix}pasangan 
├ ${prefix}gantengcek
├ ${prefix}cantikcek 
├ ${prefix}artinama
├ ${prefix}persengay 
├ ${prefix}pbucin 
├ ${prefix}bpfont 
├ ${prefix}textstyle 
├ ${prefix}jadwaltv 
├ ${prefix}lirik 
├ ${prefix}chord 
├ ${prefix}wiki 
├ ${prefix}brainly 
├ ${prefix}resepmasakan 
├ ${prefix}map 
├ ${prefix}film 
├ ${prefix}pinterest 
├ ${prefix}infocuaca 
├ ${prefix}jamdunia 
├ ${prefix}mimpi
├ ${prefix}infoalamat 
├ ${prefix}playstore 
│
├「 *GAME* 」
│
├ ${prefix}readmore        
├ ${prefix}puisiimg
├ ${prefix}asupan
├ ${prefix}tebakgambar
├ ${prefix}caklontong
├ ${prefix}family100
├ ${prefix}memeindo
├ ${prefix}kalkulator 
├ ${prefix}apkmod
├ ${prefix}moddroid 
├ ${prefix}happymod 
│
├「 *18+* 」
│
├ ${prefix}randomkpop
├ ${prefix}cersex
├ ${prefix}cerpen
├ ${prefix}randombokep
├ ${prefix}coli
├ ${prefix}pornhub 
├ ${prefix}xvideos 
├ ${prefix}nekopoi 
│
├「 *PRAY* 」
│
├ ${prefix}jadwalsholat 
├ ${prefix}quran
├ ${prefix}kisahnabi
├ ${prefix}quranlist
├ ${prefix}quransurah
│
├「 *FIND* 」
│
├ ${prefix}becrypt 
├ ${prefix}encode64 
├ ${prefix}decode64 
├ ${prefix}encode32 
├ ${prefix}decode32 
├ ${prefix}encbinary 
├ ${prefix}decbinary 
├ ${prefix}encoctal 
├ ${prefix}decoctal 
├ ${prefix}hashidentifier 
├ ${prefix}dorking 
├ ${prefix}pastebin 
├ ${prefix}tinyurl 
├ ${prefix}bitly 
│
├「 *SPAM* 」
│
├ ${prefix}spamcall
├ ${prefix}spamgmail 
│
├「 *OWNER* 」
│
├ ${prefix}addprem
├ ${prefix}removeprem
├ ${prefix}hanzprem
├ ${prefix}setmemlimit
├ ${prefix}setlimit
├ ${prefix}setreply
├ ${prefix}setreplyz
├ ${prefix}setprefix
├ ${prefix}setnamebot
├ ${prefix}setppbot
├ ${prefix}addbucin
├ ${prefix}addbacot
├ ${prefix}addsay
├ ${prefix}addstik
├ ${prefix}addvn
├ ${prefix}addimg
├ ${prefix}ohidetag
├ ${prefix}okisstag
├ ${prefix}bc
├ ${prefix}bcgc
├ ${prefix}ban
├ ${prefix}unban
├ ${prefix}block
├ ${prefix}unblock
├ ${prefix}clearall
├ ${prefix}delete
├ ${prefix}clone
├ ${prefix}getses
├ ${prefix}leave
│
├「 *PREMIUM* 」
│
├ ${prefix}play
├ ${prefix}ytplay
├ ${prefix}fb 
├ ${prefix}snack 
├ ${prefix}ytmp3 
├ ${prefix}ytmp4 
├ ${prefix}joox
├ ${prefix}joox2
├ ${prefix}smule
│
└──「 *Hanz BOT* 」
`

}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Untuk Sekarang Bot Hanya Bisa Digunakan Di Group..\`\`\`

Jika Bot Ini Ada Di Grup Anda Admin Grup harus Aktifkan Bot Dengan Cara ${prefix}zitsraa aktif
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
「 *DONATE* 」 

   *PULSA*
├ Tsel : 081226770537
├ Axis : 083823742094

BOT INI MENGGUNAKAN SYSTEM NODE.JS
Jika ingin memasukan bot ke dalam group, Silahkan donasi agar bot bisa berjalan on-time

      \`\`\`Pulsa\`\`\`
      
├ *15k Invite Bot Ke Grup selama 1 bulan*


「 *BY ${name}* 」
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  ◪  𝗟𝗜𝗦𝗧 𝗕𝗔𝗛𝗔𝗦𝗔
  ├≽  af: Afrikaans
  ├≽  sq: Albanian
  ├≽  ar: Arabic
  ├≽   hy: Armenian
  ├≽  ca: Catalan
  ├≽  zh: Chinese
  ├≽  zh-cn: Chinese (Mandarin/China)
  ├≽  zh-tw: Chinese (Mandarin/Taiwan)
  ├≽  zh-yue: Chinese (Cantonese)
  ├≽  hr: Croatian
  ├≽  cs: Czech
  ├≽  da: Danish
  ├≽  nl: Dutch
  ├≽  en: English
  ├≽  en-au: English (Australia)
  ├≽  en-uk: English (United Kingdom)
  ├≽  en-us: English (United States)
  ├≽  eo: Esperanto
  ├≽  fi: Finnish
  ├≽  fr: French
  ├≽  de: German
  ├≽  el: Greek
  ├≽  ht: Haitian Creole
  ├≽  hi: Hindi
  ├≽  hu: Hungarian
  ├≽  is: Icelandic
  ├≽  id: Indonesian
  ├≽  it: Italian
  ├≽  ja: Japanese
  ├≽  ko: Korean
  ├≽  la: Latin
  ├≽  lv: Latvian
  ├≽  mk: Macedonian
  ├≽  no: Norwegian
  ├≽  pl: Polish
  ├≽  pt: Portuguese
  ├≽  pt-br: Portuguese (Brazil)
  ├≽  ro: Romanian
  ├≽  ru: Russian
  ├≽  sr: Serbian
  ├≽  sk: Slovak
  ├≽  es: Spanish
  ├≽  es-es: Spanish (Spain)
  ├≽  es-us: Spanish (United States)
  ├≽  sw: Swahili
  ├≽  sv: Swedish
  ├≽  ta: Tamil
  ├≽  th: Thai
  ├≽  tr: Turkish
  ├≽  vi: Vietnamese
  ├≽  cy: Welsh
  └─────────────
  
  𝗛𝗔𝗡𝗭 𝗕𝗢𝗧
`
}
exports.bahasa = bahasa

const zod = (pushname2, sender) => {
  return`
\`\`\`Nama :\`\`\` ${pushname2}
\`\`\`Number :\`\`\` wa.me/${sender.split("@")[0]}
  
  
「 *ZODIAK LIST* 」

   Aries (21 Maret – 20 April)
   Taurus (21 April – 20 Mei)
   Gemini (21 Mei – 20 Juni)
   Cancer (21 Juni – 20 Juli)
   Leo (21 Juli – 21 Agustus)
   Virgo (22 Agustus – 22 September)
   Libra (23 September – 22 Oktober)
   Scorpio (23 Oktober – 22 November)
   Sagittarius (23 November – 20 Desember)
   Capricorn (21 Desember – 19 Januari)
   Aquarius (20 Januari – 18 Februari)
   Pisces (19 Februari – 20 Maret)


𝗣𝗘𝗡𝗝𝗘𝗟𝗔𝗦𝗔𝗡!

1.Aries (21 Maret – 20 April)
   Aries (♈) /ˈɛəriːz/ (yang berarti "Domba") adalah rasi Zodiak pertama, yang mencakup 30 derajat pertama bujur langit (0°≤ λ <30°). Di bawah zodiak tropis, Matahari transit di rasi ini umumnya antara 20 Maret sampai 20 April setiap tahunnya. Durasi waktu ini persis bulan pertama Kalender Persia (Farvardin). Di bawah zodiak sidereal, matahari saat transit Aries dari 15 April - 15 Mei (kurang-lebih). Simbol domba yang didasarkan pada Chrysomallus, domba terbang.
Tergantung pada sistem yang digunakan, individu yang lahir pada tanggal tersebut, dapat disebut Arian atau Ariens . Aries adalah rasi api pertama di zodiak, rasi api lainnya adalah Leo dan Sagitarius.

2.Taurus (21 April – 20 Mei)
   Taurus (Bahasa Latin untuk "Banteng"; simbol:, Unicode: ♉) adalah tanda astrologi kedua di zodiak. Zodiak Ini mencakup tingkat ke 30-60 zodiak, antara 27,25 dan 54,75 derajat bujur langit. Di bawah zodiak tropikal, matahari transit daerah ini pada 20 April sampai 20 Mei setiap tahun. Di bawah zodiak sidereal, matahari transit konstelasi Taurus dari tanggal 16 Mei Sampai 21 Juni. Orang yang lahir antara tanggal ini, tergantung pada sistem astrologi yang mereka pilih, dapat disebut Taureans.[1][2] Simbol banteng didasarkan pada banteng Kreta, seekor banteng putih, ayah Minotaur yang dibunuh oleh Theseus.
   
3.Gemini (21 Mei – 20 Juni)
   Gemini (♊)[1] adalah zodiak ketiga yang berasal dari konstelasi Gemini. Di bawah zodiak tropis, matahari transit tanda ini antara 21 Mei dan 21 Juni. Gemini diwakili oleh si Kembar Castor dan Pollux.[2] simbol kembar ini didasarkan pada Dioscuri, dua manusia yang diberikan bersama kekuatan dewa setelah kematian mereka.

4.Cancer (21 Juni – 20 Juli)
   Kanser (♋) (Yunani Kuno: Καρκίνος, Latin: Cancer) adalah zodiak keempat yang berasal dari konstelasi Cancer. Zodiak ini mencakup 90° 120° dari zodiak, antara 90° dan 120° dari tata koordinat langit. Di bawah zodiak tropis, Matahari transit daerah ini antara 22 Juni sampai 22 Juli, dan di bawah sideris, Matahari transit daerah ini dari tanggal 16 Juli sampai 15 Agustus.[1]
Dalam astrologi, Kanser adalah zodiak kardinal dari elemen air, yang terdiri dari Kanser, Pises, dan Skorpio.[2] Zodiak ini berenergi negatif, dan berdomisil di planet Bulan. Kanser berbentuk kepiting, berdasarkan Karkinos, kepiting raksasa yang dilecehkan Heracles selama pertarungannya dengan Hydra.

5.Leo (21 Juli – 21 Agustus)
   Leo (♌) (Yunani Kuno: Λέων, Latin: Leōn), adalah tanda zodiak ke 5, berasal dari konstelasi Leo. Muncul setelah Kanser (Yunani: Καρκίνος, Latin: Karkinos) dan sebelum Virgo (Yunani: Παρθένος, Latin: Parthenos). Pada zodiak tropis, Matahari transit konstelasi ini pada 23 Juli sampai 22 Agustus.
   
6.Virgo (22 Agustus – 22 September)
   Virgo (♍) (Yunani: Παρθένος, Parthenos) adalah tanda astrologi keenam dalam Zodiak. Tanda ini mencakup 150-180 derajat zodiak. Di bawah zodiak tropis, Matahari transit area ini rata-rata antara 23 Agustus dan 22 September,[1] dan Matahari transit rasi bintang Virgo dari sekitar 16 September hingga 30 Oktober.
   
7.Libra (23 September – 22 Oktober)
   Libra (♎) adalah zodiak ketujuh. Zodiak ini mencakup 180°–210° garis bujur.[1] Pada zodiak tropis, matahari transit zodiak ini pada tanggal 23 September dan 23 Oktober,[2][3] dan pada zodiak sideris, matahari berada di konstelasi ini dari 31 Oktober hingga 22 November. [4] Simbol timbangan pada zodiak ini didasari dari Scales of Justice yang dipegang oleh Themis, penjelmaan hukum dari Yunani.[5] Dia menjadi inspirasi modern wanita hukum. Planet yang menaungi Libra adalah Venus.[6][7] Libra adalah zodiak satu-satunya yang digambarkan dengan objek yang tidak hidup. Zodiak lainnya digambarkan dengan hewan atau makhluk mitologi.
   
8.Scorpio (23 Oktober – 22 November)
   Skorpio (♏) (bahasa Yunani: Σκορπιός Skorpios; bahasa Latin: Scorpius) adalah bintang kedelapan dari daftar zodiak. Bintang ini berada diurutan 210-240 zodiak, antara 207,25 dan 234,75 derajat bujur langit. Di bawah zodiak tropis, matahari transit daerah ini rata-rata antara 23 Oktober sampai 22 November, dan di bawah zodiak sidereal, matahari saat transit konstelasi Scorpius dari sekitar November 16 sampai 15 Desember. Tergantung pada sistem zodiak yang digunakan, sebuah individu yang lahir di bawah pengaruh Skorpio dapat disebut Scorpio atau Scorpion.[1] Simbol kalajengking didasarkan pada Scorpius, kalajengking raksasa yang dikirim oleh Gaia untuk membunuh Orion.[2]
Skorpio adalah zodiak kedua dalam elemen air, setelah Cancer dan diikuti oleh zodiak berelemen air ketiga, Pisces.

9.Sagittarius (23 November – 20 Desember)
   Sagitarius (♐) adalah zodiak kesembilan dalam urutan di tabel zodiak. Di langit, zodiak ini membentang di antara 240 derajat dan 269 derajat dari sistem koordinat ekliptika. Dalam zodiak tropis, Matahari transit di daerah ini dari 23 November sampai 21 Desember setiap tahun. Dalam astrologi sideris, saat matahari transit di rasi bintang Sagitarius dari sekitar 16 Desember- 14 Januari.

10.Capricorn (21 Desember – 19 Januari)
    Kaprikornus adalah salah satu dari rasi bintang zodiak. Biasanya dikenal sebagai Capricorn, khususnya dalam astrologi. Rasi ini melambangkan kambing bertanduk, sekalipun kadang banyak yang menyebutnya kambing laut. Kaprikornus adalah salah satu dari 88 rasi bintang modern, dan juga satu dari 48 rasi bintang yang didaftar oleh Ptolemy. Dalam batas rasi bintang modern, rasi ini dikelilingi oleh Akuila, Sagitarius, Mikroskopium, Piscis Austrinus dan Aquarius.
Dalam Zodiak, individu yang memiliki bintang Kaprikornus, terlahir pada 22 Desember hingga 19 januari, ketika Matahari ada pada bintang Kapricornus.

11.Aquarius (20 Januari – 18 Februari)
    Akuarius (♒) adalah zodiak kesebelas dari dua belas tanda-tanda zodiak astrologi dan itu berasal dari konstelasi yang mempunyai nama yang sama, yaitu konstelasi Akuarius.
Individu yang lahir ketika matahari berada di tanda ini dikenal sebagai "individu Akuarius". Akuarius dianggap sebagai zodiak maskulin oleh astrolog kuno dan itu dijajah oleh planet Saturnus, tetapi planet Uranus dikatakan merupakan penjaga nyata Akuarius oleh sejumlah ahli astrologi modern. Nama Sanskerta bagi Akuarius dalam astrologi Hindu ialah Kuṃbha.

12.Pisces (19 Februari – 20 Maret)
    Pises (Ikan) adalah suatu zodiak rasi bintang berada antara Akuarius di sebelah barat dan Aries di sebelah timur. Pises merupakan lambang astrologi ke-12 dalam sebuah zodiak, yang berasal dari Konstelasi Pises. Dalam astrologi, Pises identik dengan lambang feminin atau negatif. Juga merupakan perlambangan air. Dalam zodiac dilambangkan dengan sepasang ikan yang berenang dengan arah berlawanan. Secara tradisional, Pises bertahta di Planet Jupiter, tetapi sejak penemuannya, Neptunus merupakan tahta modern dari lambang ini.
Dalam Zodiak, individu yang memiliki bintang Pises, terlahir pada 19 Februari hingga 20 Maret, ketika Matahari ada pada bintang Pisces.


「 *HANZ BOT* 」
  `
}
exports.zod = zod



const bangsat = (name) => {
  return`Hi kak ${pushname2}👋
Ingin donwload apkmod?

Nih Hanz Kasih!!

👾APLIKASI

• Minecraft (Original)
https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file

• Geometry Dash (MOD)
http://www.mediafire.com/file/thnoi1wpa5ex2wn/Geometry_Dash_%2528MOD%2529.apk/file

• KineMaster (PRO)
https://www.mediafire.com/download/eshb8rra8eg5xa3

• KineMaster Diamond (MOD)
https://www.mediafire.com/download/9p8wsnwupnq0lun

• KineMaster Ruby (MOD)
https://www.mediafire.com/download/6b2wa08cmtsr8x8

• Adobe Photoshop (Original)
https://www.mediafire.com/download/whfh12tj4zjpedp

• Alight Motion (PRO)
http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file

• Avee Player (PRO)
https://www.mediafire.com/download/5vkde8d1gcyk33y

• Pixellab (PRO)
https://www.mediafire.com/download/kxj0xyvrkc8w6h0

• Inshot (PRO)
https://www.mediafire.com/download/7qcmrfdy2o1ynxf

• WavePad (PRO)
https://www.mediafire.com/download/oif50qb8ltdoe2x

• Vimage (PRO)
https://www.mediafire.com/download/egjumopr2wl89tl

• Zeotropic (PRO)
https://www.mediafire.com/download/tw9zwj2km2tjsnh

• 90s (PRO)
https://www.mediafire.com/download/0y2bba69f6wakuh


📦TEMPLATE

• Template Mine Imator
http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file

• 50 Template Avee Player 1
https://realsht.mobi/teCTj

• 50 Template Avee Player 2
https://realsht.mobi/hhSMc

• Template Quotes Rainbow
https://realsht.mobi/LbmVw

• Template Quotes 1
https://realsht.mobi/GZuvl

• Template Quotes 2
https://realsht.mobi/lFLqm

• Template Quotes 3
https://realsht.mobi/prMyC

• Template Quotes 4
https://realsht.mobi/FyGha

• Template Quotes 5
https://realsht.mobi/LdpNd

• Template Quotes 6
https://realsht.mobi/BdlQe

• Template Quotes 7
https://realsht.mobi/fdZCs

• Template Quotes 8
https://realsht.mobi/YkqIk

• Template Quotes 9
https://realsht.mobi/BcKdr

• Template Quotes 10
https://realsht.mobi/MaZno

• Template Mega Colab
https://realsht.mobi/JinWs

• Template Colab 1
https://realsht.mobi/bocSM

• Template Colab 2
https://realsht.mobi/eJwLd

• Template Colab 3
https://realsht.mobi/tGMxp

• Template Colab 4
https://realsht.mobi/oQtWo

• Template Colab 5
https://realsht.mobi/rbvWQ

• Template Wajah Orang
https://realsht.mobi/tGMxp

• Template Kacamata
https://realsht.mobi/MpoKs

• Template Unix 1
https://realsht.mobi/dfToI

• Template Unix 2
https://realsht.mobi/hRMsq

• Template Partikel
https://realsht.mobi/wOMlc

• Template Pistol
https://realsht.mobi/exXCy

• Template Solo
https://realsht.mobi/MvYbm

〽️FONT

• Kumpulan Font Untuk Quotes
https://realsht.mobi/JkmXx

• 800 Font Picsay/Pixelab
https://realsht.mobi/brKhI

• 400 Font Picsay/Pixelab
https://realsht.mobi/gBHyt

• 200 Font Picsay/Pixelab
https://realsht.mobi/iJQbj

• 100 Font Picsay/Pixelab
https://realsht.mobi/hrTdE
  
𝗕𝗶𝗹𝗮𝗻𝗴 𝗮𝗽𝗮 𝘀𝗮𝗺𝗮 𝗛𝗔𝗡𝗭?
  `
}
exports.bangsat = bangsat

const made = (name) => {
  return `───「 𝙃𝘼𝙉𝙕 𝘽𝙊𝙏」───

ini adalah whatsapp robot, yang di program melalui komputer kami tidak bisa menjawab pertanyaan kalian karena whatsapp ini husus robot
Jika ingin bertanya tanyakan admin bot ini

Robot ini mengalami crash sedang di perbaiki, mungkin sering off karena gagal jaringan

Reaired....

Bipp.... Lihat status di bawah foto profil untuk melihat bahwa robot hidup atau mati 
ADMIN BOT: 𝙃𝘼𝙉𝙕 𝘽𝙊𝙏
wa.me/6281226770537

       ║▌│█║▌│ █║▌│█│║▌║
       ║▌│█║▌│ █║▌│█│║▌║

          - 𝘊𝘰𝘶𝘯𝘵𝘳𝘺 𝘐𝘯 𝘐𝘯𝘥𝘰𝘯𝘦𝘴𝘪𝘢 -`
}

exports.made = made

const profil = (pushname2, sender) => {
  return`「 PROFIL 」
  
  \`\`\`Nama :\`\`\` ${pushname2}
  \`\`\`Nomor :\`\`\` wa.me/${sender.split("@")[0]}
  \`\`\`USER :\`\`\` Terdaftar✅

`
}
exports.profil = profil

const kontl = (pushname2, sender, getLevelingXp, getLevelingLevel) =>{
  return`「 LEVEL 」シ
  
\`\`\`Nama :\`\`\` ${pushname2}
\`\`\`Nomer :\`\`\` wa.me/${sender.split("@")[0]}
\`\`\`XP :\`\`\` ${getLevelingXp(sender)}
\`\`\`Level    : \`\`\` ${getLevelingLevel(sender)}
  
𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ `
}
exports.kontl = kontl

const ping = (prefix) => {
  return`Speed : _Kenceng tod kek bapak lu.._`
}
exports.ping = ping

const hanz = (pushname2) => {
  return `╔════════════════════
║ *About HANZ*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: *Byy*
║├≽️🛡️ *DESIGNER*: *HANZ*
║├≽️🛡️ *Owner : Rapaa*
╠════════════════════
╠════════════════════
║  HI ${pushname2}
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│https://chat.whatsapp.com/GwGvfNDJ8pXIWHVzaFmaco
║│2. *Instagram <Follow>*
║│ https://instagram.com/__zitsraa
║│3. *Creator Hanz*
║│  *wa.me/6281226770537*
║╰───────────
╠════════════════════
║ *MADE BY HANZ*
╚════════════════════  `
}
exports.hanz = hanz
// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount







