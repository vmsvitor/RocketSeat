# Layouts e Evolução

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

# Normal flow

Ou flow layout é a maneira que os elementos `block` e `inline` ficam na página

```html

<p> Texto block com <strong>inline</strong> dentro </p> //  tag strong é inline, não houve quebra de linha

<div>Outro texto</div> // ocupa toda a linha - block
```
display block faz com que haja quebra de linha e o texto ocupe todo o espaço na tela

já o caso da tag strong que é display in line, ocupe apenas o conteúdo do elemento

# Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela

```html
<table> 
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>
    <tr>
        <td>Hora</td>
        <td>20:37</td>
    </tr>
</table>
```
tr =  LINHA
td = COLUNA

Display exclusivo pra se montar uma tabela, com linhas <td> e colunas <tr>

# Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">
    Esquerda
</div>

<div style="float: right">
    Direita
</div>
<div style="clear:both">
    Normal
</div>
```
* tabless - ideia para não se usar apenas tabelas para posicionar os elementos na tela 

* faz com que os elementos fiquem na mesma linha e neste caso empurrados um pra a esquerda e outro para a direita

* no normal flow, a div ocupa toda a linha tendo a idéia de tabela.

* style="clear:both" pra limpar o fluxo e voltar a ser o block

# Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor

- Alinhamento
- Ordenamento
- Tamanho flexíveis

<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

.flexbox {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

* Com o flexbox, é possível ordernar os elementos de forma flexível e fácil.