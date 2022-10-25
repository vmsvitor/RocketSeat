# Flex wrap

- Podemos usar multi linhas. (mais de um eixo principal)
- cada nova linha, um novo flex container(mais de um eixo principal)

// possibilidade de criar novas linhas com flex-wrap: wrap;

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

.box {
    display: flex;
    border: 1px dashed red;  
    flex-wrap: wrap;  
}

.box div {
    border: 1px solid;
    width: 80px;
}

flex-wrap: wra-reverse;