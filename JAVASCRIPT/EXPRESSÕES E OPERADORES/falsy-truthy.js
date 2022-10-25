/*
    Type conversion vs type coersion

*/

//console.log(Number('9') + 5)

/*
 FALSY
    quando um valor é considerado false em contextos 
    onde um booelano é obrigatório (condicionais e loops)
        false
        0
        -0
        ""
        null
        undefined
        NaN
    */

//console.log( 0 ? 'verdadeiro' : 'falso') // neste caso um o 0 não é um dado booleano e de acordo com o type coersion, o JS o transforma em valor FALSY

/*
TRUTHY
    quando um valor é considerado tre em contextos onde um 
    booleano é obrigatório (condicionais e loops)

    tre
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log({} ? 'verdadeiro' : 'falso')





