const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Cria um conjunto a partir do array
// Não tem acesso aos métodos de array
const conjuntoNomesAtualizados = new Set(nomes);

console.log(conjuntoNomesAtualizados);

//Transformar conjunto em array
const listaNomesAtualizados = [...conjuntoNomesAtualizados];

console.log(listaNomesAtualizados);

// Facilitando processo
const listaSimplificadaNomesAtualizados = [...new Set(nomes)];

console.log(listaSimplificadaNomesAtualizados);

