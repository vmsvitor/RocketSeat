# Display: block vs display: inline

- Como as caixas se comportando em relação às outras caixas
- Comportamento externo das caixas

|   ** block                   | ** inline
|-------------------------------------------------------------|
|Ocupa toda linha, colocando o |Elemento ao lado do outro     |
|próximo elemento abaixo desse |                              |
|------------------------------|------------------------------|
|Wifth e height são respeitadas|width e height não funcionam  |
|------------------------------|------------------------------|           
|padding, margin, border irão  |Somente valores horizontais de|
|funcionar normalmente         |margin, padding e border      |
|------------------------------|------------------------------|

exemplos: 

block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`