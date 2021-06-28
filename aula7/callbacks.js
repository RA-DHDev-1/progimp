//Exercício assíncrono
//Callbacks
{
    andar = () => 'Carro andando';
    parar = () => 'Carro parado';
    acaoCarro = (andar());
    acaoCarro2 = (parar());
    console.log(acaoCarro);
    console.log(acaoCarro2);
}
console.log("\n---------------\n")
//
{
andar = () => 'Carro andando';
parar = () => 'Carro parado';
acaoCarro = () => {
    console.log(andar());
    console.log(parar());
}
}
acaoCarro();
console.log("\n---------------\n")
//

function myDisplayer(some) {
    console.log(some);
    }
    function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
    }
    myCalculator(5, 5);
