// Adicionando elementos

const div = document.createElement('div')

div.innerText = 'Olá devs'

// insertBefore

const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script )// elemento novo e o nó de referência

// body.insertBefore(div, header.nextSibling) truque para "criar" um inserAfter, já que o inserAfter não existe.