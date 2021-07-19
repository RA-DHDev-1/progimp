// 12/07/2021  ///////// ALT + SHIFT + F = identamento
// Aula 15 - Promises
// ex02setTimeout.js
// Esperando por um tempo limite
console.log("Requisição em andamento...")
setTimeout(
    function() {
        funcaoConectar("Server conectado - OK")
    }, 2000);
    function funcaoConectar(value) {
        console.log(value);
    }






/* function meuVerificador(resposta) {
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
    }); */