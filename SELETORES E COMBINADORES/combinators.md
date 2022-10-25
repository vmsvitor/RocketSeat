## Combiators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar um estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outros mesmos que haja outros elementos no meio do caminho.

```css
body article h2{
    color: red;
}

```
```html
<body>
    <article>
        <h2>Um título</h2>
    </article>

    <article>
        <h2>Outro título</h2>
    </article>
</body>
```
## Child combinator

* Identificado pelo sinal `>` entre dois seletores.
* Seleciona somente o elemento que é filho direto do pai (irá procurar o primeiro da ordem de cima para baixo e não ira aplicar se houver outro elemento dentro do caminho dependendo da especificidade)
* Elementos depois do gilho direto serão desconsiderados.

```css
body > ul > li { 
    color: red;
} // n vai pegar se tiver um elemento no camonho e n vai se aplicar aos outros pois é bem especifico.

ul > li { 
    color: red;
} // neste caso se aplica a todos os ul e li dentro do código.

ul > ul > li {
    color: red;
} // nes caso se aplica a uma segunda tag li que venha após uma tag li dentro do código.
```

# Adjacente sibiling combinator

* Identificado pelo sinal `+` entre dois seletores
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia.

<h1>Título</h1>

<p>Um parágrafo</p> // este é o irmão direto da tag h1 e será aplicado a este a cor vermelha pois a tag p está no lado direito do código css abaixo e é irmão direto.

<p>Mais um parágrafo</p>

h1 + p {
    color: red;
}

# General sibiling combinator

* Identificado pelo sinal `~` entre dos seletores.
* Seleciona todos os elementos irmãos.

<h1>Título</h1>

<p>Um parágrafo</p> // será aplicado a esta tag irmã

<p>Mais um parágrafo</p> // e neste também, mesmo que haja outro elemento no meio.

h1 ~ p {
    color: red;
}

# Utilizando combinadores

```css
ul > li[class="red"]
```

# Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos.
* Muitas vezes, um simples uso de classes. torna o trabalho muito mais eficiente.
