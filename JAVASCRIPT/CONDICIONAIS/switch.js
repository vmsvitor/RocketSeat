// switch

// muito semelhando ao if e else

/*let expression = 'a'

switch(expression){
    case 'a':
        console.log('a')
            break
    case 'b':
        console.log('b')
        break
    default: // se não
    console.log('default')
        break
}
*/
// o break é opcional - o JS passara pelo case a e vai para as proxímas expressões.

function calculate(number1, operator, number2) {
    let result

    switch(operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))


