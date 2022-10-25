# Grid

- Posicionamento dos elementos dentro da caixa
- posicionamento horizontal e vertical ao mesmo tempo 
- Pode ser flexível ou fixo
- Criar espaços para os elementos filhos habitarem

<body>
  <header>
    <div>Logo</div>
    <div>Menu</div>
  </header>
  
  <main> Conteúdo </main>

  <aside> Infos adicionais</aside>

  <footer> Rodapé</footer>
</body>

body {
  display: grid;
  margin: 0;
  height: 100vw;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  
  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr 80px;
}

header{
  background-color: green;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}

main{
  background-color: red;
  grid-area: main;
}

aside{
  background-color: blue;
  grid-area: aside;
}

footer{
  background-color: gray;
  grid-area: footer;
}