//1
const arrayEsparso = [];
arrayEsparso[1] = "peixe";
arrayEsparso[3] = "boi";
arrayEsparso[7] = "galinha";

console.log(arrayEsparso);
console.log(arrayEsparso.length);

//2
const animais = ["peixe", "boi", "galinha", "gato", "cão"];
console.log(animais);

animais.unshift("papagaio");
console.log(animais)

//3
const arrayVazio = []
arrayVazio.push(1, 2, 3); 
console.log(arrayVazio)

//4
const clinica = [];
clinica.push("cachorro", "gato", "papagaio");
console.log(clinica);

clinica.pop(0);
clinica.pop(1);
clinica.pop(2); 
console.log(clinica);

