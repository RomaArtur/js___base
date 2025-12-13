const pessoa = {
  nome: "Artur",
  idade: 21,
  pets: ["Thor"],
  nacionalidade: "Brasileiro",
};

for (const chave in pessoa) {
  console.log("Chave: ", chave); // Pega as chaves
  console.log("Valor: ", pessoa[chave]); // Pega os valores que tem em cada chave
}

const chaves = Object.keys(pessoa); // pega chaves
const valores = Object.values(pessoa); // pega valores

const entradas = Object.entries(pessoa); // pega chaves e valores 

console.log("Chaves: ", chaves);
console.log("Valores: ", valores);
console.log("Entradas: ", entradas);
