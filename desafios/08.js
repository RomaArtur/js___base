//01
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia"
}

console.log(livro);

//02
const anoAtual = new Date().getFullYear();

console.log(anoAtual);

//03
const idadePublicacao = anoAtual - livro.ano;

console.log(idadePublicacao);

livro.idade = idadePublicacao;

console.log(livro);

//04
const avaliacoes = [5, 4.5, 4, 5, 3.5];
const media = avaliacoes.reduce((acumulador, atual) => acumulador + atual, 0) / avaliacoes.length;

livro.media_avaliacao = media;

console.log(livro);


