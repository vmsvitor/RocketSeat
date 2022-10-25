/*


Vamos fortelecer e aplicar os conhecimentos,
além de aprender truques e dicas para resolver os desafios
para avançar para o próximo nível

*/

/* 
    Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - F
*/
/*
let notaFinal = 0

let notaA = notaFinal >= 90
let notaB = notaFinal >= 80 && notaFinal <= 89
let notaC = notaFinal >= 70 && notaFinal <= 79
let notaD = notaFinal >= 60 && notaFinal <= 69
let notaF = notaFinal < 60


if(notaA) {
    console.log('Nota A')
} else if(notaB) {
    console.log('Nota B')
} else if(notaC) {
    console.log('Nota C')        
} else if(notaD) {
    console.log('Nota D') 
} else{
    console.log('Nota F') 
}
*/
/* CORREÇÃO

let score = 75

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if(scoreA) {
    scoreFinal = 'A'
} else if(scoreB) {
    scoreFinal = 'B'
} else if(scoreC) {
    scoreFinal = 'C'
} else if(scoreD) {
    scoreFinal = 'D'
} else if(scoreF) {
    scoreFinal = 'F'
} else {
    escoreFinal = "Nota inválida"
}

Console.log(scoreFinal)

OU

function getScore (score) {

    let score = 75

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if(scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreF) {
        scoreFinal = 'F'
    } else {
        escoreFinal = "Nota inválida"
    }

    return (scoreFinal)
}

getScore()

*/

/* 
    SISTEMA DE GASTOS FAMILIAR

    Crie um objeto que possuirá 2 propriedades, 
    ambas do tipo array
        * receitas : []
        * despesas:  []
     
    agora crie uma função que irá calculas o total 
    de receitas e despesas e irá mostrar uma mensagem 
    se a família está com saldo positivo ou negativo,
    seguido do valor do saldo

*/
/*
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00],
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }
        
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateexpenses = sum(family.expenses)

    const total = calculateIncomes - calculateexpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if(itsOk){
      balanceText = "Positivo"  
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}
*/

/* CELSIUS EM FAHRENHEIT
    Crie uma função que receba uma string em celsius
    ou fahrenheit e faça a transformação em uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32 

*/

function transformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if(!celsiusExist && !fahrenheitExist){
            throw new Error('Grau não identifiado')
    }

    



    
}

