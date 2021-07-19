let objeto = {
    valorN: 55,
    nome: 'Josué',
    obj: {cor: 'Vermelho', nome: 'Ferrari', ano: 2013},
    array: ['Laranja', 'Maçã', 'Pera', 'Banana']
}
let objetoConvert = JSON.stringify(objeto);
console.log(objetoConvert);

console.log('\n..............................\n');

let reverse = JSON.parse(objetoConvert);
console.log(reverse);
console.log(reverse.valorN);