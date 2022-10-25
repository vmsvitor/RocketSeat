// function hoisting
// neste caso ocorre o hoisting
sayMyName();

function sayMyName() {
    console.log('Vitor')

}

// já no caso abaixo dará uncaught reference error // até mesmo com o uso do var

sayMyName();

const sayMyName = function(){
    console.log('Vitor')
}