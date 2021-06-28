function FizzBuzz(a,b) {
    for (let i = 1; i<=100; i++)
        if (i % a == 0) {
            console.log('Fizz');
        } else if (i % b == 0) {
            console.log('Buzz');
        } else  ((i % a == 0) && (i % b == 0))
            console.log('FizzBuzz');
        }
 FizzBuzz(5, 9);
 
 console.log("\n---------------\n")
 
  // Modelos do Professor
 let fizzBuzz = (x,y,str1, str2) => {
    for(let i=1; i<=100; i++) {
      if(i%x==0 && i%y==0) {
        console.log(str1,str2)
      } else if (i%x==0) {
        console.log(str1)
      }
     else if (i%y==0) {
        console.log(str2);
      } else {
        console.log(i); 
      }
    }
}
fizzBuzz(3,5,"Digital","House")

console.log("\n---------------\n")

let multiplo = (a, b) => {
    let resto = a % b; // Obtemos o resto da divisão.
    return resto == 0; // Se o resto for 0, é múltiplo
    };
    console.log(multiplo(2,2));
    if(multiplo(2,2)==true){
        console.log("É MULTIPLO")
    } else {
        console.log("NÃO É MULTIPLO")
    }
