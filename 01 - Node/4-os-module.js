const os = require('os')

// Info about current user
var user = os.userInfo()
console.log(user)

// Getting the system uptime
console.log(`The system uptime is ${Math.trunc(
    os.uptime() / (60 * 60)
)} hours ${Math.trunc(
    (os.uptime() % (60 * 60)) / 60
)} minutes and ${Math.trunc(
    ((os.uptime() % (60 * 60)) % 60)
)} seconds.`)


// Some other infos
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

