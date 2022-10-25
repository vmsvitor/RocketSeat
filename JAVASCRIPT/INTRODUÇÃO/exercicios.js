// 1. Declare uma variável de nome weight

    //let weight;

// 2. Que tipo de dado é a variável acima?

    //console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

   /* let person = {
        name: 'Vitor',
        age: 27,
        stars: 15.85,
        isSubscribed: true
    } */


/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores 
    
    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <wight> kg.

    Atencão. substitiua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */

    let student = {
        name: 'Vitor',
        age: 27,
        stars: 15.85,
        isSubscribed: true,
        weight: 77
    }

/*
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} `)

    console.log(typeof student);
*/

/*  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let students = []

/* 
    6. Reatribua valor para a variável acuma, colocando detro dela o objeto student da questão 4.
    (Não copiar e colar o onejto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student  
]

console.log(students)

/*  
    7. Coloque no console o valor da posição zero do array acima 
*/

//console.log(students[0])

/*  8. Crie um novo student e coloque na posição 1 do array students
*/

const john = {
    name: 'john',
    age: '37',
    weight: 80.5,
    isSubscribed: true
}

students = [
    student,
    john

]

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.
    
    
    console.log(a)
    var a = 1

*/