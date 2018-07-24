'use strict'

/*
hacer un programa que muestre todos los
numero ingresados entre dos números
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

if(numero2 > (numero1+1)){
    var i;
    document.write('primer numero: ' + numero1 + '<br />');
    document.write("Números Intermedios: " + '<br />');
    for (i=(numero1+1);numero2 > i; i++){
        alert("Números Intermedios: " + i);
        document.write(i+'<br/>');
        //console.log(i)        
    }
    document.write('Segundo numero: ' + numero2);
}else {
    alert("No hay números intermedios entre: " + numero1 + ' y ' + numero2);
}