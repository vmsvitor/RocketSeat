# Page layout

- Tables
- Floats e clear
- frameworks e grip systems
- Flexbox
- grid

# Posicionamento

Controlar onde, na página, o elemento irá ficar alterando o fluxo normal dos elementos.

- Name: positivon
- Value: static (padrão - um abaixo do outro) | relative  | absolute | fixed


# Relative

 - top, right, bottom, left e z-index

# Absolute

- top, right, bottom, left e z-index (como se criasse camadas e os elementos podem ficar em cima do outro - ocupa dos espaços também)

# fixed

- O elemento fica fixo na página quando ela é rolada para baixo e para cima (os outros elementos passam por baixo da camada e rola junto com a página)

# Element stacking

- muda o eixo Z e altera o empilhamento dos elementos na página (define a ordem de qual elemento fica sobre o outro ou atrás do outro)


<div class="box1 box"> </div>
<div class="box2 box"> </div>
<div class="box3 box"> </div>

.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
