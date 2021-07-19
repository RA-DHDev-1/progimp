const passo5 = {
    notaAprovacao: 7,
    faltasMaximas: 3,
    aprovado: true,
    reprovado: false,
    aluno: require('./passo1-2'),
    verificaAprovados: function (aluno) {
        if (this.aluno.calcularMedia() >= this.notaAprovacao && this.aluno.faltasAluno() < this.faltasMaximas) {
            return aprovado;
        } else if (this.aluno.faltasAluno() == this.faltasMaximas && this.aluno.calcularMedia() >= this.notaAprovacao * 1.1) {
            return this.aprovado;
        } else {
            return this.reprovado;
        }
    }
}
/* passo5.verificaAprovados();
console.log(passo5.verificaAprovados('Alberto')); */
module.exports = passo5;