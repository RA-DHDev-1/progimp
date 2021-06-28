// Exercício Aula 4
{
let entreUme40e2 =  true
let menosdeUme40acompanhada = true
let menosdeUme20 = false

if (entreUme40e2 == true || menosdeUme40acompanhada == true) {
    console.log("Em conformidade, pode subir.")
} else (menosdeUme20 == false || menosdeUme40acompanhada == false)
    console.log("Inconformidade, não pode subir.")
}
console.log('\n-----------------------------------------\n');
// Usando função
{
let altura = 1.50;
let acompanhada = true;

function podeSubir (altura, acompanhada) {
    if (altura < 1.20) {
        return console.log("Inconformidade, não pode subir.");
    } else if (altura <= 1.40 && acompanhada) {
        return console.log("Em conformidade, pode subir.");
    } else if (altura > 1.40 && altura < 2.00) {
        return console.log("Em conformidade, pode subir.");
    } else {
        return console.log("Inconformidade, não pode subir.");
    }
}
podeSubir(1.1, false)
podeSubir(1.1, true)
podeSubir(1.2, false)
podeSubir(1.2, true)
podeSubir(1.3, false)
podeSubir(1.3, true)
podeSubir(1.5, false)
podeSubir(1.5, true)
podeSubir(1.9, false)
podeSubir(1.9, true)
podeSubir(2.0, false)
podeSubir(2.0, true)
}
console.log('\n-----------------------------------------\n');
//
//Resolução em sala
function podeSubir(altura, estaAcompanhada) {
    let podeSubir = false;
    if (altura >= 1.4 && altura < 2) {
        podeSubir = true;
    }
    if (altura <1.4 && estaAcompanhada == true) {
        podeSubir = true;;
    }
    if (altura<1.2) {
        podeSubir = false;
    }
    return podeSubir;
}
console.log(podeSubir(1.1, true));
