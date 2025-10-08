const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

// Modifica o array original
notas.forEach(function(nota) { 
    somaNotas += nota; 
}) 

console.log(somaNotas);

const media = somaNotas / notas.length;

console.log(`A média das notas é ${media}`);

