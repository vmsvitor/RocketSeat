
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
}

.box div:nth-child(1) {
  order: 0;
}

.box div:nth-child(2) {
  order: 0;
}

.box div:nth-child(3) {
  order: 0;
}

.box div:nth-child(4) {
  order: -1;
}



// muda a orderm visual e não estrutural dos items