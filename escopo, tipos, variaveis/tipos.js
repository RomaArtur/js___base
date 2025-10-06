const nome = 'Artur';
const sobrenome = 'Furtado'; 
const idade = 20;
const empregado = false; 

//Junções 
const nomeCompleto = nome + ' ' + sobrenome;
const nomeEIdade = nomeCompleto + ', ' + idade;


console.log(typeof nome,typeof sobrenome, typeof idade, typeof empregado);
console.log(nomeCompleto)
console.log(nomeEIdade)

// Frase
console.log('Seja muito bem-vindo' + ' ' + nomeCompleto + '!')

// Teste da variável LET 
let elemento = 'Pedra';

if (elemento === 'Pedra') {
    let elemento = 'Água';
    console.log(elemento);
}

console.log(elemento)

// Teste da variável VAR
var ar = 'Poluído';

if (ar === 'Poluído') {
    var ar = 'Limpo';
    console.log(ar);
}

console.log(ar);

//If com variável 
let chuva = false;

if (chuva === true) {
    console.log('Não saia de casa');
} else {
    console.log('Saia de casa');
}

chuva = true; 

if (chuva === true) {
    console.log('Não saia de casa');
} else {
    console.log('Saia de casa');
}
