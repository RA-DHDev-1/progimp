//Arrow Functions
//Exempos do material

const vezes = (numero, numero1) => {
    console.log("Resultado: " +numero)
    return numero * numero1
}
console.log(vezes(20,25));
console.log("\n---------------\n")

//Ex 01
{
let print = mensagem => console.log('Olá, bom dia');
print();
}

let soma = (n1, n2) => console.log(n1+n2);
soma(10,10);