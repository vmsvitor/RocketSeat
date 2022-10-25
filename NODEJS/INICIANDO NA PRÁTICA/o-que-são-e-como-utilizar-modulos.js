// require maneira para chamar módulos nativos, criados ou instalados no nodejs

// Chamando módulos nativos do node
//const path = require('path')

//ex:
//console.log(path.basename(__filename))

// Chamando módulos criados

const myModule = require('./criando-modulos.js')

console.log(myModule)