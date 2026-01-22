//01
let saldo = 1000; 
const deposito = 500; 
const saque = 50; 
const operacao =  saldo - saque;
console.log('Saldo:', saldo); 
console.log('Saldo após saque: ', operacao)
//02
const idade = 20; 
const imparOuPar = idade % 2 === 0 ? "Par": "Impar"; 
console.log(imparOuPar); 
//03
let userLogado = true;
let permissaoAdm = false;

if (userLogado && permissaoAdm === true) {
    console.log("Usuário permitido!");
} else {
    console.log("Usuário sem permissão");
}
//04
userLogado = true;
permissaoAdm = false;

if (userLogado || permissaoAdm === true) {
    console.log("Usuário permitido!");
} else {
    console.log("Usuário sem permissão");
}
//05
let idadeUsuario = 16; 
let idadeMinima = 18;

if (idadeUsuario >= 18) {
    console.log("Pode comprar");
} else {
    console.log("Não pode comprar");
}
