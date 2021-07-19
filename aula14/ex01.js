// Data: 07/07/2021
// Aula 14 - JSON

/* let dadosJson = '{"nome": "Mané", "Sobrenome": "Garrincha", "Sexo": "Masculino"}';
console.log(dadosJson); */
//JSON é um objeto nativo
/* começo */
//desserialização ou parsing (conversão JSON para objeto JS)
/* let dadosConvertidosJs = JSON.parse(dadosJson); // converter em objeto literal em JS
console.log(dadosConvertidosJs);  */
//console.log(dadosConvertidosJs.nome);
/* término */
/* começo */
//serialização cria objeto JSON
//conversão JSON para um objeto JS
/* let novoDadoJson = JSON.stringify(dadosConvertidosJs); //converter JS p/ JSON
console.log(novoDadoJson); */
/* término */

let objetoLiteral = {materia: 'Prog. Imperativa', professor: 'William'};
objetoLiteral.professor = objetoLiteral.professor.toUpperCase();
//console.log(objetoLiteral.professor);

//Transformar em JSON - parsing
let objetoConvertidoJSON = JSON.stringify(objetoLiteral);
console.log(objetoConvertidoJSON);