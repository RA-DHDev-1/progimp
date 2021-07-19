//Passo 7
const curso = require('./passo3-4')
const estudantes = require('./estudantes');
let passo7 = curso.estudantes = estudantes;
/* console.log(curso.estudantes);
curso.estudantes = estudantes.newEstudantes;
console.log(estudantes); */
module.exports = passo7;



