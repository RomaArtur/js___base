const agora = new Date();

console.log(agora);

console.log('Ano', agora.getFullYear());
console.log('Mês (0 - 11)', agora.getMonth()); // Janeiro começa em zero
console.log('Dia', agora.getDate());
console.log('Hora', agora.getHours());
console.log('Minutos', agora.getMinutes());

const nascimento = new Date(2004, 9, 13); // Minha data de aniversário 

console.log(nascimento);

