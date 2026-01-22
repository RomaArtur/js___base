const notas = [10, 8.5, 5, 6.5, 8, 7.5]; 

for (let i = 0; i < notas.length; i++) { // (inicialização; condição; incremento)
    console.log(i, notas[i])
}

//Outro exemplo

const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(i, numeros[i]);
}

//For para repetir instrução e criar array

const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

