// Operador condicinal (ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// ? Então
// : se não

// Exemplos

// café da manhã top
    let pao = true
    let queijo = true
    
    // const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'
    
    const niceBreakfast = pao || queijo ? 'café top' : 'café ruim'
    
    console.log(niceBreakfast)

// Maior de 18


let age = 16

const canDrive = age >= 18 ? 'can drive' : "can't drive"

console.log(canDrive)