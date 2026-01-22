const frutas = ['Banana', 'Maçã', 'Laranja'];

const maisFrutas = ['Uva', 'Abacaxi', 'Mamão'];

const clone = [...frutas]; // Cria um outro array com os mesmos elementos de frutas 

frutas.push('Morango');

console.log('Array original:', frutas);
console.log('Outro array:', maisFrutas);
console.log('Clone do array:', clone);

