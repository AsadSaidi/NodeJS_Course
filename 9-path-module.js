const path = require('path')

//ruta de este proyecto
console.log(path.sep)

//Devuelve una ruta limpia, sin duplicar barras (/) y adaptada al sistema operativo
const filePath = path.join('/content/','subfolder', 'test.txt')
console.log(filePath)

//Devuelve la ruta limpia y el contenido del archivo
const base = path.basename(filePath)
console.log(base)

//Devuelve la ruta absoluta del proyecto
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)