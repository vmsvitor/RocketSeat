const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n\n\n")

}

ask ()

process.stdin.on("data", data =>{
    process.stdout.write(data.toString().trim() +'\n')
    process.exit()
})


// O "on" fica "ouvindo, atento" alguma coisa", no caso em tela, enquanto não for inserido dados ele ficará atento.
// ou seja, o terminal aguarda o usuário inserir algum tipo de dado. Ex: alguam string, frase e etc.
// O "trim()"" remove qualquer espaço vazio antes ou depois do dado.
// o "process.exit()" faz com que feche o processo da função.