// Lista de argumentos com process.argv
//tipo de dado array

//process se refere ao processo que está rodando no nodejs

const firtsName = process.argv[2]
const lastName = process.argv[3]
console.log(process.argv)

console.log(`seu nome é ${firtsName} ${lastName}`)
// 1 - A versão do Nodejs
// 2 - O local de execução do arquivo.
// 3 - Um argumento (Vitor)
// 4 - Outro argumento (Morais)