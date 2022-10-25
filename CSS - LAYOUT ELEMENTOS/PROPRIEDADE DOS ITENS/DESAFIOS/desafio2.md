<main class="box">
  <div>Coluna 1</div>
  <div>Coluna 2</div>
</main>

.box {
  display: flex;
  height: 300px;
  background: lightgray;
  gap: 1rem;
}

.box div {
  border: 1px solid;
  flex-basis: auto;
  
  
}

.box div:nth-child(1) {
  width: 25%;
}

.box div:nth-child(2) {
  flex-grow: 1;
}


# CORREÇÃO


<div class="container">
    <aside>Coluna esquerda</aside>
    <main>coluna direita</main

</div>

container {
    display: flex;
    gap: 1rem;
}

aside, main {
    border: 1 px solid
    height: 95vh;
}

aside {
    flex-basis: 25%
}

main {
    flex: 1;
}