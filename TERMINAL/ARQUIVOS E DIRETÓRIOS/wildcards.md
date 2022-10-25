# Wildcards (curingas)

* '*'
    * 1 ou mais caracter
* '?' 1 caracter

O '*' faz com que haja o complemento com um ou mais caracteres seja selecionado para ser movido e etc.

O '?' pega apenas 1 caracter.



os Wildcard (ou curingas) são * e ?.

Começando pelo *, utilizado da seguinte forma:

mv fil* Diretorio

Nesse cenário, todos os arquivos com as primeiras letras fil, seriam movidas para a pasta Diretorio, ou seja, se eu tivesse 3 arquivos com nomes file1 file2 e file3, ou mesmo 500 arquivos com as 3 primeiras letras em seu nome sendo fil, seriam movidos para a pasta Diretorio.

Já o ? é utilizado de forma similar, observe o exemplo abaixo:

mv -r site? Diretorio
Suponhamos que nessa pasta, exista a pasta site, site1, site2, site3, site4, site5 e site67.

Nesse cenário, iríamos estar movendo apenas as pastas com um número ao seu final, fazendo o comando ignorar a pasta site e a pasta site67, pois apenas um dígito após a wildcard é passado.