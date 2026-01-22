const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

function exibeNomeENota(aluno) {
  if (alunos.includes(aluno)) {
    const indice = alunos.indexOf(aluno); 
    const mediaAluno = medias[indice]; 
    console.log(`${aluno} tem a média ${mediaAluno}`);
  } else {
    console.log("Estudante não existe na lista");
  }
}

exibeNomeENota("Caio");
exibeNomeENota("Vini");
