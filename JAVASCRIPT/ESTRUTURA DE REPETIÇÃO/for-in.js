// for...in

let person = {
    name: 'john',
    age:30,
    weight: 88.6
}

for(let property in person) { //no objeto person, pegue a propriedade a atribua a variável let
    console.log(property) // acessa o objeto.
    console.log(person[property]) // para acessar as propriedades do objeto.
}

// cria um loop em cima de um objeto, pegando suas propriedades.