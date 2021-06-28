//Exercício em aula
{
function valorIMC(nome, idade, peso, altura) {
    let calculo = (peso / altura ** 2)
    return `${nome} tem ${idade} anos de idade e seu IMC é ${calculo}`                                          
}
console.log(valorIMC("Juan", 30, 90, 1.80));
}