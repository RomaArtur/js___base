const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefone: ["11999999999", "11988888888"],
  media: 7.5,
  //Não pode usar Arrow Function dentro de objetos. 
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
};

console.log(estudante.estaAprovado(7));

