'use strict'

/*
HACER UN PROGRAMA SI UN NUMERO ES PAR O IMPAR
1 VENTANA PROMPT
2 SI NO ES VALIDO QUE NOS PIDA EL NUMERO
*/

var numero = 0;

while( numero == 0 || isNaN(numero)){
    numero = parseInt(prompt("Ingrese un numero: ",0));
    //debugger;
}

if(numero%2==0){
    alert("es un numero par")
}else{
    alert("es un numero impar")
}