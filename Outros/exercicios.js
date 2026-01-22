// Verificar se um ano é bissexto
// Um ano é bissexto quando:
// Deve ser divisivel por 4 mas NÃO divisível por 100
// Ou
// Deve ser divisível por 100 e por 400

const ano = 2026;

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 100 === 0) && (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
};


