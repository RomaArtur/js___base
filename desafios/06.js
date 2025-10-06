//01
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indice = 0;

numeros.forEach((lista, índice) => {
    console.log(lista, índice);
})


//02
numeros; 

function dobrarNumero(numero) {
  return numero * 2;
}

const numerosDobrados = numeros.map(dobrarNumero);

console.log(numerosDobrados);


//03
numeros;
const busca = 8;
const indiceEncontrado = numeros.indexOf(busca);

if (indiceEncontrado !== -1) {
    console.log(`O número ${busca} foi encontrado no índice ${indiceEncontrado}`);
} else {
    console.log(`O número ${busca} não foi encontrado.`);
}


//04
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

//05
const allTurma = nomesTurmaA.concat(nomesTurmaB);
console.log(allTurma);
const alunoProcurado = allTurma.find(nome => nome === 'Ana Souza');

if (alunoProcurado) {
    console.log(`Aluno encontrado: ${alunoProcurado}`);
} else {
    console.log(`Aluno não encontrado.`);
}

//06
const numbers = [6, 9, 12, 15, 18, 21];

numbers.forEach((number) => {
    const result = number * 3;
    console.log(result);
})










