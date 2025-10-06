const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
   enderecos: [{
     rua: 'Rua Joseph Climber',
     numero: '45',
     complemento: 'apto 43'
   },
   {
     rua: 'Rua Dona Clotilde',
     numero: '71',
     complemento: null
  }]
}

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

const valoresObjeto = Object.values(estudante);
console.log(valoresObjeto);

if (chavesObjeto.includes('endereceos')) {
    console.log('O objeto estudante possui a chave enderecos');
} else {
    console.log('O objeto estudante não possui a chave enderecos');
}
