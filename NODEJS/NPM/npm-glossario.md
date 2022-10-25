# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__
(coisas que outras pessoas criraram dentro do projeto para expandir as funcionalidades nativas do node.)

- [] Verificar se temos o npm instalado `npm -v`

- [] Criar nosso próprio pacote `npm init ou npm init -y`

- [] O que é o arquivo package.json - (JavaScript Object Notation)

- [] Utilizar módulos de terceiros `npm install cfonts`

- [] O que é diretório node_modules 
    * um módulo vai chamando vários outros pois são dependentes (dependencies) apesar de ter instalado apenas um. O devDependencies somente é quando vamos usar aquele projeto que foi chamado no nosso projeto. Quando o módulo é distribuído para outras pessoas, não virá módulos do devDependencies - A pasta node_modules não é enviada ao repositório git (neste caso é criado um arquivo na raiz .gitignore com 'node_modules/ no conteúdo), pois o projeto já demonstra quais são as dependências e é possível trazer a pasta novamente no processo de instalação (npm install).

- [] O que é arquivo package-lock.json
    * Este arquivo faz o mapeamento de todas as dependência que existem no projeto. O ideal é não deletar, e não realizar nenhuma alteração - faz o seu projeto ser mais rápido e inteligente, pois mapeou os módulos.

- [] Criar scripts para rodar com o npm
    * para criar scripts que vão "rodar" com o npm: primeiro crie um arquivo (ex: index.js); ir ao arquivo package.json, alterar o argumento "test" para "start" e o valor para "node index.js" (nome do arquivo criado que pode ser outro). No terminal, digite: npm run start ou npm start (por ser um comando especial não necessita do run - apenas para a palavra start)

- [] Instalar pacote de maneira global `npm i opn(opn é o nome do pacote) -g`
    * Para saber em qual local o pacote global foi instalado: `npm root -g`

- [] Desisntalar pactes
    * para remover o pacote instalado de maneira global: `npm unstall (e o nome do pacote) opn -g`
    para saber o diretório root do node onde pode estar instalado os pacotes `npm root -g`

- [] Mudar versão de pacotes
    * Significado que constam na pasta packege.json depois de instalar um pacote: ex: "moment": "^2.29.1"
    "moment" -> é o pacote instalado
    "^2.29.1" -> major.minor.patch
    patch: A versão do patch que o desenvolvedor está resolvendo bugs no pacote.
    Minor -> Significa que ocorrerá alterações, mas não há possibilidades de "quebrar" o que está acontecendo no pacote.
    Major -> Versão do projeto e poderá quebrar o que acontece com o pacote
    ^ -> Significa que o npm sempre atualizará o minor e o patch
    ~ ->Siginifica que apenas o patch será atualizado. 
    * -> Significa que o desenvolvedor mudará todas as versões
    Se não houve os sinais "^" e "~" significa que a versão será mantida fixa e nunca mudará de versão
    * Usar `npm i moment@1.5.1` para instalar uma versão anterior do pacote, `npm outdated` para visualizar a versão atual, a versão desejada (melhor versão para utilizar), e a últmia versão disponível. Usar `npm upgrade` para atualizar todos os pacotes para a versão desejada.
    Nota: Ao usar o `npm upgrade`, ocorrerá o upgrade da versão definitivamente para a versão "wanted"(ou desejada), sendo que apenas a versão exibida no mapeamento do arquivo package.json será alterada. A versão do pacote exibida em "dependencies", não será alterada e parmanecerá a que foi instalada.
    Para atualizar o pacote para a última versão dispónivel, digitar `npm i moment@latest`

- [] Removendo/desisntalando paoctes
    * Para remover/desinstalar um pacote, digite `npm unstall moment(nome do pacote)`

