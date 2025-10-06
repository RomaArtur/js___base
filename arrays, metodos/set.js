const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//Conjunto
//Não tem acesso aos métodos de array
const conjuntoNomesAtualizados = new Set(nomes);

console.log(conjuntoNomesAtualizados);

//Transformar conjunto em array
const listaNomesAtualizados = [...conjuntoNomesAtualizados];

console.log(listaNomesAtualizados);

//Facilitando processo
const listaSimplificadaNomesAtualizados = [...new Set(nomes)];

console.log(listaSimplificadaNomesAtualizados)


