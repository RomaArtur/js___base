// Faça uma função que aceite vários arrays como argumentos e retorne um único array 
// contendo todos os elementos dos arrays fornecidos, 
// utilizando Spread Operator.
function concatArrays(...arrays) {
  return [].concat(...arrays);
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);
console.log(arraysConcatenados);

// Crie um array de números chamado valores. 
// Depois,escreva um programa que some todos os elementos deste array 
// utilizando o método reduce.
const valores = [10, 20, 30, 40, 50];
const soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);

//  Crie um programa que una essas duas listas, 
// removendo cores duplicadas e exiba a lista final.
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log(coresUnicas);

// Escreva uma função que receba um array de números 
// e retorne um array contendo apenas os números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    

function filtrarPares(numeros) {
  return numeros.filter(numero => numero % 2 === 0);
}

const numerosPares = filtrarPares(numeros);
console.log(numerosPares);

