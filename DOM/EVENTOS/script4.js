// Eventos

const h1 = document.querySelector()

h1.addEventListener('click', print)

function print() {
    console.log('print')
}

h1.addEventListener('click', function() {
   console.log('outro momento')
})

// este é a maneira mais recomendada pois com o h1.onclick = function, o JS pode rodar
// o último evento do código.
// Então, para que não haja conflito, o recomendado é que seja usado o h1.addEventListener()
// pois rodará todos os eventos do código e há a opção de executar mais de uma função em um evento,
// como no caso acima. 

