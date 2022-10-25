# Encontrar arquivos ou pastas com find

* find <path> arg [expression]
    * -type <d|f> (d:directory | f:file)
    * -name 

find(encontrar) .(pasta atual) -type f(tipo arquivo) -name "*.mp4" (nome com expressão mp4)

find . -type f -name "*.mp4" (encontre na pasta atual arquivos que tiver .mp4 no fim do nome)

find . -type f -name "*.jpg" (encontre na pasta atual arquivos que  que tiver .jpg no final do nome)











Nesta aula falaremos sobre o comando find, utilizado para encontrar pastas e arquivos, e sua sintaxe é:

find <caminho> arg [expression]
No caso, se deseja usar o finder no seu diretório atual, você pode usar um ponto (.), sendo assim, você substituiria o <path> pelo diretório que deseja

Já o arg, é o tipo de item que deseja encontrar, seja esse uma pasta ou um arquivo.

Usaremos para buscar um arquivo, então teremos que usar o arg -type e colocar a letra f, caso quiséssemos uma pasta, seria a letra d após o -type.

Também temos o argumento -name, que é o nome do arquivo ou pasta que desejamos, e caso quiséssemos que as letras pesquisadas sejam independentes de capitalização (maiúsculo, minúsculo), deve-se usar o argumento -inamepodendo também ser usado para buscar uma extensão específica de arquivo. Exemplo abaixo.

find . -type f -name "*.mp4"
Assim que fosse executado, esse comando exibiria todos os arquivos .mp4 no seu diretório atual.