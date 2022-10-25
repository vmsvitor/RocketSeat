# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começa com 2 pontos seguidos do nome da pseudo class `:pseudo-class-name`

# Selecionando elementos com pseudo-classes

* :first-child


    <ul>
        <li>Gratidão</li>
        <li>Esperança</li>
        <li>Fé</li>
    </ul>

    ul li:first-child {
        font-weight: bold;
    }

// Caso haja outra tag no primeiro filho da tag li,
não será aplicado pq o li não é o primeiro filho direto da li. ex:
 <ul>
        <h3>Palavras bonitas</h3>
        <li>Gratidão</li>
        <li>Esperança</li>
        <li>Fé</li>
    </ul>

//o primeiro filho é o h3

* :nth-of-type()

    <article>
        <h3></h3>
        <p></p>
        <p></p>//será aplicada nesta tag pois está selecionada abaixo p:nth-of-type(1)
        <p></p>
    </article>

article p:nth-of-type(2) /
    font-weight: bold;
    font-size: 18px;

/das tags p do código, pegue o numero (2)

* :nth-child()

 <article>
        <h3></h3>//filho 1
        <p></p>// filho 2
        <p></p>//filho 3
        <p></p>// filho 4 - neste caso, é considerada a posição do filho no código
    </article>

article p:nth-child(4) /
    font-weight: bold;
    font-size: 18px;


* :nth-child(odd) e :nth-child(even)

    even - números pares
    odd  - números ímpares

    HTML

    <ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
    </ul>
    CSS

    ul li:nth-child(odd) {
    color: gray;
    }

# Açãoes do usuário

* :hover

Com o mouse do usuário em cima, a cor do link ficará vermelha

    <a href="">Clique aqui</a>

    a:houver {
        color: red;
    }

* :focus

Quando o usuário clicar, a borda do input ficará vermelha

    <a href="">Clique aqui</a>
    <input type="text">

    a:houver {
          color: red;
     }
     iput:focus {
        border-color: red;
     }


# Atributos

* :disable

Quando conter o atributo disabled

<a href="">Clique aqui</a>
    <input type="text" disabled>

    a:houver {
          color: red;
     }
     iput:focus {
        border-color: red;
     }

iput:disabled {
        background-color: green;
     }

* :required

Quando conter o atributo required

<a href="">Clique aqui</a>
    <input type="text" required>

    a:houver {
          color: red;
     }
     iput:focus {
        border-color: red;
     }

iput:required {
        background-color: green;
     }

# Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes



