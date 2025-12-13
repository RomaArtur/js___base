const pessoa = {
  nome: "Artur",
  idade: 20,
  profissão: "Desenvolvedor de Software",
};

const pessoa2 = {
  nome: "João",
  idade: 20,
  profissão: "Desenvolvedor de Software",
};

const pessoa3 = {
  nome: "Ronaldo",
  idade: 20,
  profissão: "Desenvolvedor de Software",
};

const pessoas = [pessoa, pessoa2, pessoa3];

console.log(pessoa.nome);

pessoa.idade = 21;

console.log(pessoa.idade);

pessoa.cidade = "São Paulo";

console.log(pessoa.cidade);

function recebeObjeto(pessoa) {
  console.log("Dados:", pessoa);
}

recebeObjeto(pessoa);

for (chave in pessoa) {
  console.log("Chave: ", chave);
  console.log("Valor: ", pessoa[chave]);
}

for (let pessoa of pessoas) {
  if (pessoa.idade >= 18) {
    console.log(`${pessoa.nome} é maior de idade.`);
  }
}
