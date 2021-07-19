// Data: 07/07/2021
// Aula 14 - JSON
// ex02.js

let frutas = '{"Fruta":"banana", "Preço": 8.50, "Tipo": ["prata","maçã","nanica","da terra", "ouro"], "Origem": "Brasil"}';
console.log(frutas);
//console.log(frutas.origem);

let frutasConvertidas = JSON.parse(frutas);
console.log(frutasConvertidas);
console.log(frutasConvertidas.Origem);

//converter para JSON
let frutasConvertidasJson = JSON.stringify(frutasConvertidas);
console.log(frutasConvertidasJson);