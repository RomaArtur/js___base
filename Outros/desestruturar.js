const pessoa = {
  nome: "Nathalia",
  idade: 19,
  profissao: "Estudante",
};

console.log(pessoa.nome);
console.log(pessoa.idade);

// Recebe um objeto como parâmetro,
// desestruturando para obter os valores das propriedades 'nome' e 'idade'

function saudacao({ nome, idade }) {
  console.log(`Olá, ${nome}`);

  if (idade > 18) {
    console.log("Maior de idade");
  }
}

saudacao(pessoa);

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// Desestruturando o array para obter os dois primeiros elementos
const [primeiraFruta, segundaFruta] = frutas;

console.log(primeiraFruta);
console.log(segundaFruta);

// Outra forma de acessar os elementos do array sem desestruturação
const primeira = frutas[0];
const segunda = frutas[1];


