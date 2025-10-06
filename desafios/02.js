//01
let nome = "Artur";

function cumprimento(nome) {
  return `Olá ${nome}! Como vai?`;
}

const saudacao = cumprimento();

console.log(cumprimento(nome));

//02
function maiorIdade(idade) {
  if (idade >= 18) {
    return "maior de 18 anos.";
  } else {
    return "menor de 18 anos.";
  }
}

console.log(maiorIdade(18));

//03
function palindromo(string) {
  const stringInvertida = string.split("").reverse().join("");
  return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(palindromo("arara"));
console.log(palindromo("artur"));

//04
function encontrarMaiorValor(a, b, c) {
  return Math.max(a, b, c);
}

console.log(encontrarMaiorValor(5, 20, 12));

//05
const calculaPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
};

console.log(calculaPotencia(2, 2));
