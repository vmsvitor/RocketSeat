// manipulando elementos
//atributos

const header = document.querySelector('header')

header.setAttribute('id', 'header') //adiciona a tag header o id="header"

const headerID = documet.querySelector('#header')

console.log(headerID.getAttribute('id')) //para pegar o atributo

//header.removeAttribute('id')
//header.removeAttribute('class')