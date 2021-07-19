//Importando e chamando móódulos

const aluno = require('./módulos/passo1-2');
const curso = require('./módulos/passo3-4');
const passo5 = require('./módulos/passo5');
const passo6 = require('./módulos/passo6');

console.log(aluno.calcularMedia());
console.log(aluno.faltasAluno());
console.log(curso.adicionaAlunos('Denis'));
console.log(curso.estudantes);
console.log(passo5.verificaAprovados());
console.log(passo6);

console.log('\n..............................................\n');

{
const passo7 = require('./módulos/passo7')
console.log(passo7);
}
