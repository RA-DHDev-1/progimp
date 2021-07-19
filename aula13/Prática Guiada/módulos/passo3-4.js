//Passo 3-4
let curso = {
    nome: 'CTD',
    aprovacao: 9,
    maxFaltas: 2,
    estudantes: ['Giovani', 'Rener', 'Juan', 'Guilherme', 'Fernando'],
    adicionaAlunos: function(elemento) {
        return this.estudantes.push(elemento)
    }
};
/* console.log(curso.estudantes);
console.log(curso.adicionaAlunos('Wendel'));
console.log(curso.estudantes); */
module.exports= curso;