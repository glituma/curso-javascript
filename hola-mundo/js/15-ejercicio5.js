'user strict'

/*
Programa que muestre todos los números divisores introducidos en el prompt
*/

var numero = parseInt(prompt("Mete un numero: ", 1));

for(var i=1; i <= numero; i++){
    if(numero%i == 0){
        console.log("Divisor: " + i);
    }    
}