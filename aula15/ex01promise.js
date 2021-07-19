// 12/07/2021  ///////// ALT + SHIFT + F = identamento
// Aula 15 - Promises
// O que são Promises?
// É um objeto JavaScript que vincula:
// 1 - A produção de código
// 2 - O consumo 
// Propriedade do objeto Promise: Pendente / Realizada / Rejeitada 

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function (Resolve, Reject) {
        let x = 10;
        if (x == 0) {
            Resolve("Tudo OK")
        } else {
            Reject("Deu erro")
        }
    }
);
minhaPromessa.then(
    function (Resolve) {
        meuVerificador(Resolve)
    }).catch((Reject) => {
        console.log(Reject);
    });