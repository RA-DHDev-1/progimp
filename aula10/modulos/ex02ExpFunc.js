//Aula 10 - 23/06/2021
//Dentro da pasta módulos
exports.somar= (a,b) => a + b;
exports.subtrair= (a,b) => a - b;
exports.multiplicar= (a,b) => a * b;
exports.dividir= (a,b) => {
    if (b != 0) {
        return a / b;
    } else {
        return 'Impossível dividir por Zero'
    }
}

// função LETRA MAIÚSCULA
exports.maiuscula = (texto) => console.log(texto.toUpperCase());