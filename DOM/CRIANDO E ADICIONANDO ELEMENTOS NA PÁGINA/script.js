// criando e adicionaod elementos

// creatElement

const div = document.createElement('div')
div.innerText = 'Olá devs!'

// append prepend

const body = document.querySelector('body')

body.append(div) //adiciona depois

body.prepend(div) // adiciona como primeiro filho