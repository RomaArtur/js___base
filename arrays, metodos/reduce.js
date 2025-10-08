const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
    // Modifica o array original
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0); // 0 é o valor inicial do acumulador

    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

const numeros = [1, 2, 3, 4, 5];

// Outro exemplo
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("A soma dos números é:", soma);