# Copiando arquivos e pastas

* cp
    * copiar

cp file2.txt arquivo.txt (primeiro argumentp o arquivo que quer copiar e o segundo argumento é aonde quer copiar)

cp -r site site2 site3 site4 site5 sites

-r (recursivo) para copiar todos os direórios para dentro de uma pasta. 
Falaremos nesta aula sobre o comando cp (que é copy, ou do inglês, cópia), que é um comando utilizado para copiar arquivos.

O primeiro argumento é o nome do arquivo que deseja copiar, já o segundo argumento é onde copiar o arquivo, da seguinte forma:

cp File1.txt Destino
Caso você deseje copiar pastas, ainda é possível, porém será necessário o uso do argumeto -r, da seguinte forma:

cp -r Pasta1 Pasta2
Podemos ainda copiar mais de uma pasta ou arquivo, fazendo uso de espaços, sendo o último argumento a localização final, da seguinte forma:

cp -r Pasta1 Pasta2 Pasta3 Pasta4 Pasta5 Pasta6 pastaDestino