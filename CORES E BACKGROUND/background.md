# Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- por padrão é transparente

# Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa

- Usar cor e imagem juntas
- Usar cor gradiente

<header> 

</header>
<main>
  <h1>Evolua rápido com a tecnologia.</h1>
  <p>Junte-se a milhares de devs e acelete na direção dos seus objetivos</p> 
</main>

* {margin: 0;}
header {
  height: 100px;
  border: 7px dashed red;
  
  background-color: rgb(55, 100, 50)
  background-image:  url(https://rocketseat.com.br/icons/icon-144x144.png?v=cfca599cb367ccaf7377d56ddc7542f5);
  background-repeat: no-repeat;
  background-position: center ;
  background-size: cover;
  background-origin: padding-box;
  background-clip: padding-box;background-attachment: fixed;

  /* shorthand*/
  background: rgb(55, 100, 50) url(https://rocketseat.com.br/icons/icon-144x144.png?v=cfca599cb367ccaf7377d56ddc7542f5); no-repeat center / cover border-box content-box fixed

  background: linear-gradient(270deg, red, yellow, green), rgb(55, 100, 50) url(https://rocketseat.com.br/v=cfca599cb367ccaf7377d56ddc7542f5); no-repeat center / cover border-box content-box fixed;
  
  background: radial-gradient(rgba(255,255,0) rgba(255, 0,0 0.2));
}

** Multiplos background será possível se aplicar a vírgula. ex: background: rgb(55, 100, 50) url(https://rocketseat.com.br/icons/icon-144x144.png?v=cfca599cb367ccaf7377d56ddc7542f5); no-repeat center / cover border-box content-box fixed