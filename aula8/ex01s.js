// Aula 08 - 16/06/2021
// 280, 339, 1500
// Lucro: 50%
// 1) Lista de valores de custo de produtos - ok
// Lista de valores de venda ao consumidor
// Orçamento: 0,009 BTC

let precoCusto = [280, 330, 1500, 3300, 150];
const margemLucro = 1.5;

function custoInicial(precoCusto) {
    console.log("\n***********Relatório Preço Custo*********");
    for (let i = 0; i<precoCusto.length; i++) {
        console.log("Posição do Array é: "+ i +" - "+precoCusto[i]);
    }
}
// \n Quebra de linha
custoInicial(precoCusto);
// Com Lucro
function precoVenda(precoCusto) {
    console.log("\n***********Relatório Preço ao Consumidor*********");
    for (let i = 0; i<precoCusto.length; i++) {
        let resultado = precoCusto[i]*margemLucro;
        console.log("Preço de venda é: "+ i +" - "+resultado);
    }
}
precoVenda(precoCusto);

