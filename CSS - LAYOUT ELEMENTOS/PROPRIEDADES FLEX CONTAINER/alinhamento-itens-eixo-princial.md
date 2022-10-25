# justify-content

- alinhamento dos elementos dentro do container
- distribuição dos elementos

## valores

- flex-start // é o padrão
- flex-end // agrupados no final
- center // agripados no centro
- space-around // espaços por igual ao redor dos elementos
- space-bretween // espaço entre os elementos
- space-evenly // espaço por igual entre os elementos

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

.box {
    display: flex;
    border: 1px dashed red;

    justify-content: space-bretween;
}

.box div {
    border: 1px solid;
}