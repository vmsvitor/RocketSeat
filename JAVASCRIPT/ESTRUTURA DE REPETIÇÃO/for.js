// Estrutura de repetição
// for

for(let i = 0; i < 10; i++) {
    console.log(i)
}




//for(inicialização de uma variável; condição de continuação para o loop; expressão final)

// Se a variável i for menor do que 10, o JS entra no bloco de código e após, incrementa valor ao i, confor expressão no fim i++
// isso se repetirá até quando a incrementação fizer com que o i seja maior do que 10
// após i ser maior do que 10, é a condição de parada da aplicação;

for(let i = 100; i > 0; i--) {
    console.log(i)
}

// break - para a execução do loop

for(let i = 100; i > 0; i--) {
    if(i===50)
        break

    console.log(i)
}

// continue - pula a execução do momento

for(let i = 100; i > 0; i--) {
    if(i===50)
        continue

    console.log(i)
}

//for(inicialização de uma variável; condição de continuação para o loop; expressão final)



