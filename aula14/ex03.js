// Data: 07/07/2021
// Aula 14 - JSON
// ex03.js
// Objetivo da aplicação: Escrevendo arquivos (teste.txt)
// fs = filesystem
// apaga o arquivo que já existe (sobreescreve o arquivo)

const fs = require('fs');
let frutas = '{"Fruta":"banana", "Preço": 8.50, "Tipo": ["prata","maçã","nanica","da terra", "ouro"], "Origem": "Brasil"}';

fs.writeFileSync('teste.txt', frutas);

// let o arquivo
let lerJson = fs.readFileSync('teste.txt', 'utf-8');
console.log(lerJson);

// converter Obj para objJs
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);



