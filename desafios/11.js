import { subtracao, soma } from '../calculadora/operacoesMatematicas.js';

// Desestruturar objetos

const usuario = {
  nome: "Artur",
  idade: 21,
  email: "arturromafurtado@gmail.com",
};

const { nome, idade, email } = usuario;

console.log(nome);
console.log(idade);
console.log(email);

// Desestruturar arrays

const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo, terceiro, quarto, quinto] = numeros;

console.log(primeiro);
console.log(segundo);
console.log(terceiro);
console.log(quarto);
console.log(quinto);

// Rest Operator em função

function somar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(somar(3, 2, 4, 5));

// Spread Operator com arrays

const frutas1 = ["maça", "banana", "pera"];
const frutas2 = ["uva", "jabuticaba", "amora"];

const frutas = [...frutas1, ...frutas2];

console.log(frutas);

// Spread Operator com objetos

const dados1 = {
  nome: "Artur",
};

const dados2 = {
  idade: 21,
};

const perfil = { ...dados1, ...dados2 };

console.log(perfil);

function saudacao(nome = "visitante") {
  console.log(nome);
}

// É a mesma coisa que isso daqui 
function saudacao2(nome) {
  if (nome === undefined) {
    nome = "visitante";
  }
  console.log(nome);
}

saudacao(); 

// Trabalhando com datas 

const agora = new Date(); 

console.log('DIA:', agora.getDate(), 'MÊS:', agora.getMonth() + 1, 'ANO:', agora.getFullYear());

// Teste de importação de funções 

console.log('Soma:', soma(5, 10));
console.log('Subtração:', subtracao(10, 5));
