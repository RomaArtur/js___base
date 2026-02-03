// Definir fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = "soma";

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao === "multiplicacao") {
  console.log(num1 * num2);
} else {
  console.log("Operação não identificada");
}

// Localizar o nível bônus de acordo com a faixa salarial

const salario = 5000; 

if (salario >= 11000) {
  console.log("3% de bônus");
} else if (salario < 11000 && salario >= 7000) {
  console.log("5% de bônus");
} else if (salario < 7000 && salario >= 4000) {
  console.log("7% de bônus");
} else {
  console.log("9% de bônus");
}

let artur; 

// É bissexto ou não? 

const ano = 2026;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
  console.log(`${ano} é bissexto`);
} else {
  console.log(`${ano} não é bissexto`);
};

// Verificar se estudante receberá bônus na nota
// Estudantes recebem bônus se a nota for 8 ou acima e se tiverem no máximo 2 faltas 

const nome = "Roberta";
const nota = 8;
const faltas = 3; 

const recebeBonus = (nota >= 8) && (faltas <= 2) 
? `${nome} recebe bônus` 
: `${nome} não recebe bônus`;

console.log(recebeBonus);

// Criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// ex: usuário free tem acesso limitado ao app
// usuario premium tem acesso a todas as funções
// usuário super premium tem acesso total e bônus especiais
const user = premium;

switch(user) {
  case 'free': 
    console.log('acesso limitado');
    break;
  case 'premium':
    console.log('acesso total');
    break
  case 'super premium':
    console.log('acesso total ao app e bônus');
    break
  default:
    console.log('tipo de user desconhecido');
    break
};

// controle de acesso para um evento
// para entrar precisa ter 18 anos ou mais 

const idade = 17;

const acesso = (idade >= 18) 
? 'Acesso Permitido' 
: 'Acesso Negado';

// Horário de funcionamento de loja 
// Durante a semana abre 9h - 18h
// sab e dom abre 10h - 14h

const diaSemana = 6;

switch (diaSemana) {
  case "1":
    console.log("Aberta das 9h às 18h");
    break;
  case "2":
    console.log("Aberta das 9h às 18h");
    break;
  case "3":
    console.log("Aberta das 9h às 18h");
    break;
  case "4":
    console.log("Aberta das 9h às 18h");
    break;
  case "5":
    console.log("Aberta das 9h às 18h");
    break;
  case "6":
    console.log("Aberta das 10h às 14h");
    break;
  case "7":
    console.log("Aberta das 10h às 14h");
    break;
  default: 
    console.log("Não encontrado")
};

// Outra opção

diaSemana;

if (diaSemana === 6 || diaSemana === 7) {
  console.log("Aberta das 10h às 14h");
} else {
  console.log("Aberta das 9h às 18h");
};





