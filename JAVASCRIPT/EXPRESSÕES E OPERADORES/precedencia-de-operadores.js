/*
    Operator precedence
        precedência de operadores

* grouping                      ( )
* negação e incremento          ! ++ --
* multilicação  e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=c
* igualdade                     == != === !==
* AND                           &&
* OR                            ||
* condicional                   ?:
*assignment (atribuição)        = += -= *=
*/

// console.log( 3 > 2 > 1) // o JS entende do seguinte modo: 
//3 é maior do que 2? Sim, o resultado é TRUE. E TRUE é maior do que 1? Não, o resultado é FALSE
// O JS não entendera como 3 é maior do que dois e maior do que um

console.log( 3 > 2 && 2 > 1) // Neste caso, será comparado TRUE com TRUE
// 3 é maior do que 2, o resultado é TRUE e 2 é do que um e o resultado também é TRUE
// Então TRUE && TRUE = TRUE