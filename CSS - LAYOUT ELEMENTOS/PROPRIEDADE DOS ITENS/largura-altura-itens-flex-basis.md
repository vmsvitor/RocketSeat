# flex-basis

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

.box {
    display: flex;
    border: 1px dashed red;
    
}

.box div {
    border: 1px solid;
}   flex-basis: 15%;

.box div:nth-child(1) {
    width: 250px;
}

// flex-basis: auto; por padrão