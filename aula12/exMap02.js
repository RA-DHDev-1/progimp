// Aula 12 - 30/06/2021
// exMap01.js
/* O map() -> método cria uma nova matriz com os resultados
da chamada de uma função para cada elemento da matrix */
let salarios = [1050.75, 2000.78, 5000.98, 7500.89];
// com arrow function
let reajuste = item => item * 1.4;

let salariosAtualizados = salarios.map(reajuste);

// função fora
/* function reajuste(item) {
    return item*1.4; // atualizando em 40% de aumento
} */

console.log(salarios);
console.log(salariosAtualizados);