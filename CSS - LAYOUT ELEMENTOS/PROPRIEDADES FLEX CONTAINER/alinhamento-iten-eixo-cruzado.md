# align-items

- Alinhamento dos elementos no eixo cruzado.

## Valores

- stretch
- flex-star
- flex-end
- center

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

.box {
    display: flex;
    border: 1px dashed red;
    align-items: stretch;
}

.box div {
    border: 1px solid;
}