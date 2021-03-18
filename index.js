console.log('Starting Zitsraa BOT...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')

CFonts.say('Zitsraa BOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['white', 'green']
})
CFonts.say(`By ZitsUnknown`, {
  font: 'console',
  align: 'center',
  gradient: ['white', 'green']
})
function start(file) {
let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '),{
    font: 'console',
    align: 'center',
    gradient: ['green', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
start('Fxc7.js')