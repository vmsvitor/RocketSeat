# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

# Tipos

* Element selector
    - Todos os elementos HTML

    HTML
    <h1>Título da página</h1>
    <p>Conteúdo da minha página</p>

    CSS

    h1 {
        color: blue;
        font-size: 60px;
    }

    p {
        color: green;
    }


* ID Selector
 - Um elemento que tenha um atributo `id`.
 - Cada ID deverá ser único.

    HTML
    <h1 id="title">Título da página</h1>
    <p id="content">Conteúdo da minha página</p>

    <p id="content">Conteúdo da minha página</p>

    CSS
    #title {
    color: yellow;
    }

    #content {
        color: orange;
    }

* Class Selector
    - Os elementos que contenham um atributo `class`
    - Podemos ter um ou mais classes.

    HTML
    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>

    CSS

    .red {
    color: red;
    }

    .big {
        font-size: 3em;
    }

* Attribute selector
    - Um elemento que tenha um atributo específico.

    HTML

    <h1 title="Algum titlulo">Título da página</h1>
    <p title="Conteúdo da página">Conteúdo da minha página</p>

    CSS

    [title] {
	color: orange;
    }

* Pseudo-class selector
    - Elementos de um estado específico.

    HTML

    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>

    <p class="red big">Conteúdo da minha página</p>
    CSS

    p:hover {
        color: red;
    }

    h1:hover {
        color: red;
    }

 ## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar regra
css para todos eles.

Usamos uma separação por vírgula para isso.

    h1, p, .title, .title:hover {
        color: red;
    }
