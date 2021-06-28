//Ex de Loop For

for(let i=0; i <=4; i++){
   console.log("Olá Mundo") 
}

//Ex imprimir ímpar

for (let i=1; i<10; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}
console.log("\n---------------\n")
//Ex criação de tabuada
//Métodos
let table = 5;
let count = 10;

for (var i = 0; i < count; i++) {
    i++;
    console.log(table, "X", i, "=", table * i);
    --i;
}
console.log("\n---------------\n")
//
{
for (let i = 1; i <= 10; i++) {
    console.log("Tabuada do " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}
}
console.log("\n---------------\n")
//
for (let multiplicado = 1; multiplicado <= 10; multiplicado++) {
    for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
         console.log(multiplicado + "x" + multiplicando + " = " + 
         (multiplicado * multiplicando))
         }
    }
    console.log("\n---------------\n")