const notas = [10, 8.5, 5, 6.5, 8, 7.5]; 

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice])
}

//Outro exemplo

const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

//For para repetir instrução e criar array

const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

