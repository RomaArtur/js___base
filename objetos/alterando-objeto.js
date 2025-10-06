const estudante = {
  nome: "José Silva",
  idade: 30,
  cpf: "123.456.789-00",
  email: "jose.silva@email.com",
  turma: "JavaScript",
};

//Criando uma nova propriedade
estudante.telefone = "11 99999-9999";

console.log(estudante["telefone"]);

//Alterando uma propriedade
estudante.nome = "Maria Silva";

console.log(estudante.nome);

//Removendo uma propriedade
delete estudante.email; 

console.log(estudante.email);

