//Modelo anterior
const nota1 = 10;
const nota2 = 6.5; 
const nota3 = 8; 
const nota4 = 7.5; 

const media = (nota1 + nota2 + nota3 + nota4) / 4; 

console.log(media); 

//Modelo atual
const notas = [10, 6, 8, 9.5]; 

const mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(mediaArray.toFixed(1));




