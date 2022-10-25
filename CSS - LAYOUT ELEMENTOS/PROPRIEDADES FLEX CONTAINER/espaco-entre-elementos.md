# gap

- espaço entre os elementos

## valores

Unidade de medidas
fixas: px, pt (píxels, pontos)
flexíveis: %, em, rem



<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

.box {
    display: flex;
    border: 1px dashed red;

    gap: 2em;
}

.box div {
    border: 1px solid;
}