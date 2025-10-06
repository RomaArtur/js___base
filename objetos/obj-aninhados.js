const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefone: ["11999999999", "11988888888"],
};

estudante.endereço = {
    rua: "Rua dos bobos",
    numero: '456',
    complemento: "apto 22",
};

console.log(estudante.endereço.rua);
console.log(estudante.endereço.numero);
console.log(estudante.endereço.complemento);

