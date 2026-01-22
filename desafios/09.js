//01
const pessoa = {
  nome: "Artur Roma Furtado",
  idade: 20,
  solteiro: false,
  hobbies: ["Paintball", "Video-games", "Filmes e Séries", "Musculação"],
  cidade: "São Paulo",
};

function mostrarInfoPessoa(pessoa) {
  console.log(pessoa);
}

mostrarInfoPessoa(pessoa);

//02
pessoa.endereco = {
  rua: "Rua Henrique Barcelos",
  cidade: "São Paulo",
  estado: "SP",
};

console.log(pessoa);

//03
const pessoas = [
  {
    nome: "Artur",
    idade: 20,
    solteiro: false,
    hobbies: ["Paintball", "Video-games", "Filmes e Séries", "Musculação"],
    cidade: "São Paulo",
  },
  {
    nome: "Maria",
    idade: 22,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Cinema"],
    cidade: "Rio de Janeiro",
  },
  {
    nome: "João",
    idade: 25,
    solteiro: false,
    hobbies: ["Futebol", "Guitarra", "Cerveja"],
    cidade: "Belo Horizonte",
  },
];

//04
function mostrarListaPessoas(pessoas) {
  return pessoas;
}

console.log(mostrarListaPessoas(pessoas));

//05
pessoas.push({
  nome: "Ana",
  idade: 19,
  solteiro: true,
  hobbies: ["Dança", "Música", "Culinária"],
  cidade: "Curitiba",
});

mostrarListaPessoas(pessoas);

//06
function filtrarPorCidade(pessoas, cidade) {
  return pessoas.filter((pessoa) => pessoa.cidade === cidade);
}

console.log(filtrarPorCidade(pessoas, "São Paulo"));

//07
const calculadora = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => (b ? a / b : "Erro: Divisão por zero!"),

  // function(a, b) {
  //    if(b === 0) {
  //        return "Erro: Divisão por zero!";
  //    }
  //    return a / b;
  // },
};

console.log(calculadora.soma(20, 10));
console.log(calculadora.subtracao(20, 10));
console.log(calculadora.multiplicacao(20, 10));
console.log(calculadora.divisao(20, 10));
console.log(calculadora.divisao(20, 0));

//08
calculadora.media = function (numeros) {
  const soma = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );
  return soma / numeros.length;
};

console.log(calculadora.media([10, 8, 9, 7, 6]));

//09
const contaBancaria = {
  titular: "Artur Roma Furtado",
  saldo: 1000,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      return "Saldo insuficiente!";
    }
  },
};

contaBancaria.depositar(500);
console.log(contaBancaria.saldo);
contaBancaria.sacar(200);
console.log(contaBancaria.saldo);


//10
const cliente = {
  nome: "Artur Roma Furtado",
  conta: contaBancaria,
};

function mostrarSaldo(cliente) {
  return `Saldo de ${cliente.nome}: R$ ${cliente.conta.saldo}`;
}

console.log(mostrarSaldo(cliente));