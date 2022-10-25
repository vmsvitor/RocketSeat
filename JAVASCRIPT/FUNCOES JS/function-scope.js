// function scope

let subject = 'create video'
function creatThink(subject) { //só existe um novo escopo se colocar o parâmetro na funcção (subject), caso o contrário ira subsescrever a variável mesmo que em escopos diferentes
    subject = 'study'
    return subject
}

console.log(subject)
console.log(creatThink(subject))