//Exercício Assíncrono do final da aula 5

let estudo = ["Livros", "Mochila", "Caderno", "Lápis", "Caneta", true]
let PC = ["Memória", "Placa de Vídeo", "Gabinete", "Headset", "Mouse", false]
let compare = estudo.includes(true)
let compare1 = PC.includes(false)
console.log(PC);
console.log(PC.push("Teclado"));
console.log(PC.pop(5));
console.log(estudo.join(" - "));

if (compare == true && compare1 == true) {
    console.log("Ambas são booleanas"); 
}

//Exercício 2 (filmes)
{
let filmes = ["star wars".toUpperCase(), "clube da luta".toUpperCase() , "o poderoso chefão".toUpperCase() , "top gun".toUpperCase() , "interstelar -".toUpperCase()]
let joinedFilmes = filmes.join(" - ")
let cartoons = [" toy story" , "Procurando Nemo" , "kung-fu panda" , "wally", "fortnite"]
let fix = cartoons.pop(4)
let joinedCartoons = cartoons.join(" - ")
let sum = [joinedFilmes + joinedCartoons]
console.log(sum);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]

if (asiaScores.length === euroScores.length) {
    console.log("As quantidades de notas batem.");
} else (asiaScores[0,1,2,3,4,5,6,7] === euroScores[0,1,2,3,4,5,6,7]) }
{
    console.log("Os valores das notas diferem.");
}