{
const precoSemTaxa = [1200, 340, 560, 30400, 500, 80, 1000, 90000];
const taxa = 1.21;
for (let i = 0; i < precoSemTaxa.length; i++) {
 console.log(precoSemTaxa[i] * taxa);
}
console.log(precoSemTaxa.length);
}
console.log("\n---------------\n")
//

const PrecoSemTaxa = [1200, 340, 560, 30400, 500, 7060, 400, 1000];
const taxa= 1.21;
let precoComTaxa = [];
 
function guardarPrecoComTaxa(PrecoSemTaxa) {
  for (let i = 0; i < PrecoSemTaxa.length; i++) {
    precoComTaxa.push(PrecoSemTaxa[i] * taxa);
  }
}
 
function mostrarPrecoComTaxa(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
guardarPrecoComTaxa(PrecoSemTaxa);
mostrarPrecoComTaxa(precoComTaxa);