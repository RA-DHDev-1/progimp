// Aula 12 - 30/06/2021
// exMap01.js
/* O map() -> método cria uma nova matriz com os resultados
da chamada de uma função para cada elemento da matrix */
let letrasMinusculas = ['a', 'b', 'c', 'd'];
console.log(letrasMinusculas);
//
//let letrasMaiusculas = letrasMinusculas.map(
//    function maiuscula(elemento) {
//        return elemento.toUpperCase();
//  }
//);
//console.log(letrasMaiusculas);

// Com arrow function
let letrasMaiusculas = letrasMinusculas.map(maiuscula=elemento=>elemento.toUppercase());
console.log(letrasMaiusculas);