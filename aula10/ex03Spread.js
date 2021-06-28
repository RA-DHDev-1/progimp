// Spread - é muito útil para "quebrar" um array

function somar(x, y, z) {
    return x + y + z;
}
const numeros = [1, 2, 3];

console.log('Total.........: '+somar(...numeros));

console.log('Maior número......'+Math.max(...numeros));
console.log('Menor número......'+Math.min(...numeros));

let nome = 'Rener';
let sobrenome = 'Almeida';
// como o spread operator, ele junda os dois
let nomeCompleto = [nome, sobrenome];
console.log(...nomeCompleto);