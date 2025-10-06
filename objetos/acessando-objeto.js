const estudante = {
  nome: "José Silva",
  idade: 30,
  cpf: "123.456.789-00",
  email: "jose.silva@email.com",
  turma: "JavaScript"
};

console.log(estudante.nome);
console.log(estudante["nome"]);

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "cpf"));

