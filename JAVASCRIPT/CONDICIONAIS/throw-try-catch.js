// throw

function sayMyName(name = '') {
        if (name === '') {
            throw 'Nome é necessário'
        }
        //throw para a execução
        console.log('depois do erro')
}




// try... catch

try {
    sayMyName('')
} catch(e) {
console.log(e)
}

console.log('após a função de erro')

// É importante se usar o try e catch pois a função trava/para na execução do no throw.
// com o try e catch é possível rodar toda a aplicação sem travar no throw, capiturando todo os erros que existirem


/*Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}
Nesse caso, se o nome vier vazio, será disparada uma mensagem.

Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')
O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.

*/