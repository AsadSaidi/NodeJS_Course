const os = require('os')

// info current user
const user = os.userInfo()
console.log(user)

// metodo que devuelve el tiempo de uso el sitema operativo
console.log(`The system Uptime is ${os.uptime()} s`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)