let numerosPrimos = [2, 3, 5, 7, 9, 11];
let numeros = [...numerosPrimos, 13, 17, 19];
console.log(numeros);
console.log('\n---------------\n');

// Exemplos do Professor
//desestruturar==> extração de valores de um objeto  ou array
//a desestruturação NÃO MODIFICA o objeto ou array original

//array frutas
let frutas=['Morango','Manga','Limão'];
let nomeFruta=frutas[0];   //desestruturando e armazenando 1 nome de fruta
console.log(nomeFruta);
 
//desestruturando todo o array de frutas
//no caso de ARRAY as variáveis são envolvidas por COLCHETES
let [fruta1, fruta2, fruta3]= frutas;
fruta3='bla bla bla';
console.log(fruta3.toUpperCase());
console.log('\n---------------\n');
//
//spread operator (...) operador de propagação
//   ...variável (pode ser array, string ou objeto)

{
//spread operator em arrays
let frutasVermelhas=['Morango','Cereja','Melancia'];
let frutasAmarelas=['Melão','Damasco','Pêssego'];
let frutasVerdes=['Limão','Abacate'];

//com o spread operator ele junta os dois num só
let frutas = [...frutasVermelhas, ...frutasAmarelas];
//ele coloca em forma de array dentro de array
let frutas1 = [frutasVermelhas,frutasAmarelas];
console.log(frutas);
console.log(frutas1);
}