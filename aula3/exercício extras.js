//Exercícios Extras

//1º
    function calcularIndiceDeMassaCorporal(altura, peso) {
    let calculo = (peso / altura **2);
    return `Desconhecido do exercício extra possui ${altura} metros de altura, ${peso}kg e seu IMC é ${calculo}.`;
}
console.log(calcularIndiceDeMassaCorporal(2.0, 120));

//2º

function soma(a,b) {
    return a + b
}
console.log(soma(10, 20));

function subtracao(c,d) {
    return c - d
}
console.log(subtracao(30, 20));

function multiplicacao(e,f) {
    return e * f
}
console.log(multiplicacao(15, 15));

function divisao(g,h) {
    return g / h
}
console.log(divisao(100, 20));

//3º

let nomeJogador = "Pelé"
let golsJogador = 1000
let precoEmDolares = 50000

function fazerGol(a) {
    return ++a
}
console.log(fazerGol(golsJogador))
console.log("GOLLL!")

function precosubir(b) {
        return b + 10000
}
console.log(precosubir(precoEmDolares));
console.log("Pelé agora possui 1001 gols e seu valor de mercado é 60000.")

//4º
function hatTrick(a) {
    return a * 3
}
console.log(hatTrick(1))

let value = 60000
let dezPorCento = 6000
let ano = true

function increaseValue(a, b) {
  return a + b
}
console.log(increaseValue(value, dezPorCento));

if (ano == true && value == 60000 && dezPorCento == 6000) {
    console.log("Passado um ano, o passe com acréscimo de 10% resulta em 66000.") 
    } else (ano == false)
    console.log("Ainda não passou um ano, valor intacto.");
