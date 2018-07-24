'use strict'

/*
calculadora:
- pida dos numeros por pantalla
- si metemos mal que nos vuelta a pedir
- en el body de la pagina, en un alert y por consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1;
var numero2;

while( numero1 < 0 || isNaN(numero1)){
    numero1 = parseInt(prompt("Ingrese el primer numero: ",0));
}

while( numero2 < 0 || isNaN(numero2)){
    numero2 = parseInt(prompt("Ingrese el primer numero: ",0));
}

var resultado = "La suma es : " + (numero1+numero2) + " <br />" + 
                "La resta es : " + (numero1-numero2) + " <br />" +
                "La multiplicacion es : " + (numero1*numero2) + " <br />" +
                "La division es : " + (numero1/numero2) + " <br />";

var resultadoCMD = "La suma es : " + (numero1+numero2) + " \n" + 
                   "La resta es : " + (numero1-numero2) + " \n" +
                   "La multiplicacion es : " + (numero1*numero2) + " \n" +
                   "La division es : " + (numero1/numero2) + " \n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);