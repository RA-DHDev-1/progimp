//Aula5
//Exercício de Array

let PC = ["Memória", "Placa de Vídeo", "Gabinete"]
let maisCaro = PC.push("Processador")
console.log(maisCaro)

let plataforma = ["JS", "C", "C#"]
let maisTensa = plataforma.pop()
console.log(maisTensa)

let canseira = ["Sono", "Cansaço", "Desanimo"]
let inserir = canseira.shift()
console.log(inserir)

let javaScript = ["Interessante", "Mais ou menos", "Fodeu"]
let resultado = javaScript.unshift("Do Caralho!")
console.log(resultado)

let saPorra = ["Que azia", "Fim da picada", "É o fino"]
let toma = saPorra.join(", ")
console.log(toma)

let select = [45, 60, 80]
let sera = select.indexOf(80)
console.log(sera)

let cabanunca = ["Here's", "To", "You"]
let naomesmo = cabanunca.lastIndexOf("To")
console.log(naomesmo)

let final = ["CTD", "DH", "Show"]
let aleluia = final.includes("CTD")
console.log(aleluia)