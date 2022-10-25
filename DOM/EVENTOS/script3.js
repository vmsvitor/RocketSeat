// Eventos

const h1 = document.querySelector('h1')
// adiciona um ouvidor de eventos
h1.addEventListener('click', print) // argumentos: tipo de evento; qual função vai executar

function print () {
    console.log('print')
}


