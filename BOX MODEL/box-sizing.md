# Box sizing

- Como será calculado o tamanho total da caixa?

- Content-box | border-box

** tem que usar o * {
  box-sizing: border-box
  }
  ; para que o cálculos das medidas seja feito de borda a borda, caso o contrário haverá conflito entre  valor atribuído ao width e ao padding

<div> 
    <strong> CSS </strong> é incrível!
</div>

div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;
  box-sizing: border-box;
}
