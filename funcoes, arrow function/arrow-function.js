const estudanteReprovou = (notaFinal, faltas) => {
        if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false; 
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

const exibeNome = (nome) => nome; //forma suprimida 
console.log(exibeNome('Caroline'));


