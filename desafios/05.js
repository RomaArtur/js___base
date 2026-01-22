//01
const numerosInteiros = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numerosInteiros.length; i++) {
  console.log(numerosInteiros[i]);
}

//02
numerosInteiros;

function imprimirIndiceArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(i, lista[i]);
  }
}

imprimirIndiceArray(numerosInteiros);

//03
numerosInteiros;

function somaElementosArray(lista) {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

console.log(somaElementosArray(numerosInteiros));

//04
numerosInteiros;

function MinAndMax(lista) {
    let maior = lista[0]; 
    let menor = lista[0];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return `O maior número é ${maior} e o menor número é ${menor}.`
  }

console.log(MinAndMax(numerosInteiros)); 

//05
const listaNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]; 

for (let i = 0; i < listaNumeros.length; i++) {
     listaNumeros[i] % 2 === 0 ? console.log(listaNumeros[i]): 0;
}

//06
listaNumeros; 
let soma = 0;

for(let i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);

    soma += listaNumeros[i];
    console.log(soma);
}

const media = soma / listaNumeros.length; 
console.log(media.toFixed(2)); 


