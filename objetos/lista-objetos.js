const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefone: ["11999999999", "11988888888"],
  endereco: [
    {
      rua: "Rua dos bobos",
      numero: "456",
      complemento: "apto 22",
    },
  ],
};

estudante.endereco.push({
  rua: "Rua dos doidos",
  numero: "789",
  complemento: "",
});

console.log(estudante.endereco[0]);
console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);