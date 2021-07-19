// 12/07/2021  ///////// ALT + SHIFT + F = identamento
// Aula 15 - Promises
// ex03Promises.js

// host
let dadosConexaoJson = '{"server": "168.192.0.1", "login": "admin", "senha": 123}';
//console.log(dadosConexaoJson);

//convertendo em JS
let dadosConexaoJs = JSON.parse(dadosConexaoJson);
/* console.log(dadosConexaoJs.server);
console.log(dadosConexaoJs.login);
console.log(dadosConexaoJs.senha); */

// usuário

let vserver = "168.192.0.1";
let vlogin = "admin";
let vsenha = 123;

// configuração padrão
let conexao = false;

if (dadosConexaoJs.server == vserver && dadosConexaoJs.login == vlogin
    && dadosConexaoJs.senha == vsenha) {
    conexao = true;
    //console.log(conexao);
} else {
    conexao = false;
    //console.log(conexao);
}

// Criação da Promise

const promessa = new Promise((resolve, reject) => {
    console.log("Requisição em andamento...")
    // Criação de um Delay de 3 segundos
    setTimeout(
        () => { // Verificamos se a promise dará erro ou não
            if (conexao == false) {
                reject("Acesso Negado")
            } else {
                resolve(JSON.stringify({
                    vserver : "168.192.0.1",
                    vlogin : "admin",
                    vsenha : 123
                }
                ))
            }
        }, 3000)
})
promessa.then((resolve) => { // consumo ou utilização do retorno da promise
    const dados = JSON.parse(resolve);
    console.log(dados);
    }
).catch((
    (reject) => {
        console.log(reject)
    }
)
























/* console.log("Requisição em andamento...")
setTimeout(
    function () {
        funcaoConectar("Server conectado - OK")
    }, 2000);
function funcaoConectar(value) {
    console.log(value);
} */

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
    }); */)