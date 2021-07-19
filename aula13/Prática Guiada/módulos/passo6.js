let curso = require('./passo3-4');
const passo5 = require('../módulos/passo5');
const { estudantes } = require('./passo3-4');

const passo6 = curso.function = function() {
    for (let i = 0; i < estudantes.length; i++) {
        if ([...estudantes[i]] === passo5.verificaAprovados()) {
            return true;
        } else {
            return false;
        }
    }
};
/* console.log(curso.function()); */
module.exports = passo6;