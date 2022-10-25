/*
    function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    * 
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + 'está andando'
    }
}

const vitor = new Person('Vitor')
console.log(vitor.walk())
