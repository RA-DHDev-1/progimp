// Aula 12 - 30/06/2021
// exMap04.js
/* O reduce é um método que reduz a matriz a um único valor certo.
O método executa uma função fornecida para cada valor da matriz.
O valor de retorno da função é armazenado em um acumulador (resultado / total) */

const numeros = [1,2,-3,4,5,0,7,8,9,19];
let resultado = numeros.reduce(function(acumulador,item) {
    return acumulador + item;
})
console.log(resultado);