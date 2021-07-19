//Passo 1
let aluno = {
nome: 'Alberto',
qtdFaltas: 5,
notas: [8,9,7,10],
calcularMedia: function() {
    totalNotas = 0;
    for (i = 0; i<this.notas.length; i++) {
        totalNotas += this.notas[i]; // Somatório das Notas
    } return totalNotas / this.notas.length; //Cálcula da Média
},
faltasAluno: function() {
    return this.qtdFaltas += 1;
}
};
/* aluno.calcularMedia();
aluno.faltasAluno();
console.log(aluno.calcularMedia());
console.log(aluno.faltasAluno()); */
module.exports = aluno
