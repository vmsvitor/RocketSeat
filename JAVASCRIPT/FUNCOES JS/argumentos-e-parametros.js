
// função anônima ou function expression
    
// parametros da função (parameters)

    const sum = function(number1, number2) { // parametros da função (parameters)
            total = (number1 + number2)
            return total
}

//sum(2, 3) // argumentos



/*
como se o console agisse da seguinte maneira:
const sum = function(number1, number2)
 {          let number1 = 2
            let number2 = 3
    
}

sum(2, 3)*/

let number1 = 34
let number2 = 25



//console.log(`O número 1 é ${number1}`)
//console.log(`O número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total) // neste caso não dará erro pois mesmo que fora do escopo, a variável total rodou na linha de cima

// é possível criar uma variável sem colcoar cosnt, var ou let (vide total acima) mas não é recomendado pois pode gerar conflitos no código