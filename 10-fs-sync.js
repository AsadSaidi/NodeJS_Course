const {readFileSync, writeFileSync} = require('fs');

//Para leer el contenido de un archivo
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first)
console.log(second)

//Crear y escribir un nuevo archivo
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} //Escribir por encima de lo que ya hay
)
