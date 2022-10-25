/*
 Buscando e contando dados em arrays

 Baseado no array de libros por categorias abaixo, faça os seguintes desafios

    * contar o número de categorias e o número de libros em cada categoria
    * Contar o número de autores
    * mostrar libros do autor auguto cury
    * transformar a função acima em uma fração que irá receber o nome do autor
    e devolver os livos desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os Segredos da Mente Milionária",
                author: "T. Harv Eker",
            },
            {
                tile: "O Homem Mais Rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, Pai Pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },

        ],
    },
    {
        categoty: "Inteligência emocional",
        books:[ 
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Agusto Cury",
            },
            {
                title: "Os 7 Habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }

        ],
    },
]

let totalCategories = booksByCategory.length

for(let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        } 
    }
    console.log("total de autores: ", authors.length)
}

countAuthors()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                authors.push(book.title)
            }
        } 
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')
