# flex-shrink

- O encolher do item dentro do container.

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

.box {
    display: flex;
    border: 1px dashed red;
    width: 160px;
    
}

.box div {
    border: 1px solid;
    flex-basis: 100%;
} 

.box div:nth-child(2) {
    flex-shrink 2;
}

