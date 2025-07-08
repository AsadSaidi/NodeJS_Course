const {readFileSync, writeFileSync} = require('fs');
console.log('start')
//Para leer el contenido de un archivo
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

//Crear y escribir un nuevo archivo
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} //Escribir por encima de lo que ya hay
)

console.log('Done with the task')
console.log('Starting the next one')
