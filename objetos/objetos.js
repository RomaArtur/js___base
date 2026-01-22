//Com lista
const infosPessoais = [
  "nome",
  "José Silva",
  "idade",
  30,
  "cpf",
  "123.456.789-00",
  "email",
  "jose.silva@email.com",
];

console.log(infosPessoais[1]);

//Com objeto
const ObjPessoais = {
  nome: "José Silva",
  idade: 30,
  cpf: "123.456.789-00",
  email: "jose.silva@email.com",
};

console.log(ObjPessoais.nome);

//Outro teste

const livro = {
  titulo: "O Hobbit",
  paginas: 310,
};

livro.publicado = true;

livro.idiomas = ["Inglês", "Português", "Espanhol"];

livro.idiomas.push("Mandarim", "Francês");

console.log("Livro antes", livro);

delete livro.paginas;

console.log("Livro depois", livro);

livro.idiomas;
livro["idiomas"];

const autor = {
  nome: "J R R Tolkien",
  nacionalidade: "Britanico",
  idade: 98,
  livros: [livro]
};

console.log("Autor:", autor);

livro.autor = autor; 

console.log(livro);


