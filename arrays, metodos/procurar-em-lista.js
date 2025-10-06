const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(alunos) {
  if (lista[0].includes(alunos)) {
    const indice = lista[0].indexOf(alunos)
    const mediaAluno = lista[1][indice];
    console.log(`${alunos} tem a média ${mediaAluno}`);
  } else {
    console.log('Estudante não existe na lista');
  }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');

