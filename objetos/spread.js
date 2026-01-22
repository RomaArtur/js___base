const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
  ],
};

const dadosEnvio = {
    nome: estudante.nome,
    ...estudante.enderecos[0],
};

console.log(dadosEnvio);

