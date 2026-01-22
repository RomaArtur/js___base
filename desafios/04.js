//01
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

function juntarListas(lista1, lista2) {
  const listasJuntas = lista1.concat(lista2);
  return listasJuntas;
}

console.log(juntarListas(lista1, lista2));

//02
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);
console.log(parteNumeros);

//03
const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];

frutas.splice(2, 2, "Kiwi");
console.log(frutas);

//04
const menuPrincipal = ["macarrão", "lasanha", "inhoque"];
const menuDeSobremesas = ["sorvete", "nutella", "brigadeiro"];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);

//05
const familiaNome = ["Artur", "Vanessa"];
const familiaIdade = [20, 21];

const familia = [familiaNome, familiaIdade];
console.log(familia);

//06
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log("Matriz de duas dimensões:");
console.log(matriz);
matriz.forEach((row) => console.log(row));

console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);