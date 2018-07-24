'use strict'

//Ejercicio Uno

/*
    PROGRAMA QUE PIDA DOS NÚMEROS Y QUE NOS DIGA CUAL ES MAYOR
    Y CUAL ES EL MENOR Y SI SON IGUALES.
    PLUS: Si los números no son números o son menores a cero
*/

while (numero1 <= 0 || isNaN(numero1)){
    var numero1 = parseInt(prompt("Ingrese el primer numero",0));
    if(numero1 == 0){
        alert("El numero debe ser mayor a 0")
    }
    if(isNaN(numero1)){
        alert("Numero no valido")
    }
}

while(numero2 <= 0 || isNaN(numero2)){
    var numero2 = parseInt(prompt("Ingrese el segundo numero",0));
    if(numero2 == 0){
        alert("El numero debe ser mayor a 0")
    }
    if(isNaN(numero2)){
        alert("Numero no valido")
    }
}

if(numero1 == numero2){
    alert("Los números son iguales")
}else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);
}else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: " + numero1);
}else{
    alert("INGRESE NÚMEROS CORRECTOS")
}

console.log(numero1);
console.log(numero2);