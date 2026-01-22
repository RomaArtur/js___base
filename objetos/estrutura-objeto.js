const estudante = {
  nome: "José Silva",
  idade: 30,
  cpf: "123.456.789-00",
  email: "jose.silva@email.com",
  turma: "JavaScript"
};

console.log(estudante.nome);
console.log(`o nome do estudante é ${estudante.nome}`); 
console.log(`Os três primeiros dígitos do CPF são ${estudante.cpf.substring(0, 3)}`);

