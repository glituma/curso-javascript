'use strict'

/*
Utilizando un bucle, mostramos la suma y la media de los números introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce números hasta que metas uno negativo",0));
    if(isNaN(numero)){
        numero=0
    }else if(numero >= 0){
        suma += numero;
        contador++;
        //debugger;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0);

alert("La suma de todos los números es: " + suma);
alert("La media de todos los números es: " + (suma/contador));