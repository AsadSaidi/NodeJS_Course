//Modulos - Encapsulamiento de codigo
//En node se utiliza CommonJS donde cada archivo es un modulo
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade.js')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)




