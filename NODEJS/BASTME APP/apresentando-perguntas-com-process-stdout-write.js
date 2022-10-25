//process.stdout.write("alguma coisa")

//stdout = processo de saída pradrão

// Podemos usar '\n\n\n' que signidica "new line"
// no console.log() já coloca por padrão um "\n"

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

ask()