'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

var numero1 = 0;
var numero2 = 0;

while( numero1 == 0 || isNaN(numero1)){
    numero1 = parseInt(prompt("Ingrese el primer numero: ",0));
}

while( numero2 == 0 || isNaN(numero2)){
    numero2 = parseInt(prompt("Ingrese el segundo numero: ",0));
    if (numero2 <= (numero1)){
        alert("El segundo numero debe ser mayor que el primero");
        numero2=0
    }    
}

document.write("<h3>Los números impares son: </h3><br />");
while(numero1 < numero2-1){
    numero1++;    
    if(numero1%2 != 0){        
        document.write("El número " + numero1 +" es impar<br />");
    }
}