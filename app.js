//Comandos NPM
//npm (Comando global)
//npm --version (Muestra la version de npm)

//Podemos instalar paquetes como dependencia local, es decir en un proyecto en particular 
//npm i <nombreDelPaquete>

//O Podemos instalar paquetes como dependencia global, es decir que lo podamos utilizar en cualquier proyecto
//npm install -g <nombreDelPaquete>

//package.json - Archivo que guarda info importante sobre el proyecto/paquete
//Se puede crear de tres maneras diferentes

//- manualmente: crea un archivo package.json en la raiz
//- automaticamente:
 // 1. npm init (Te preguntara paso por paso)
 // 2. npm init -y (Se pondran todas las config por defecto)
//Este pakckage.json, sirve para qu cuando queramos instalar el paquete local, se tendra que guardar como dpendencia

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// En el archivo .gitignore hay que añadir la carpeta node_modules porque no hace falta subirlo en nuestro repositorio