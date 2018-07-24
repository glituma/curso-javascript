'use strict'

/*
tabla de multipliciar de un numero introducio por pantalla
*/

var numero1 = 0;

while( numero1 == 0 || isNaN(numero1)){
    numero1 = parseInt(prompt("De que numero quieres la tabla: ",1));
}

for(var i=1; i <= 10; i++){
    document.write(numero1 + " x " + i + " = " + (numero1*1) + "<br />");
}

for(var a=1; a <= 10; a++){
    document.write("<h1>Tabla del: " + a + "</h1>"); 
    for(var i=1; i <= 10; i++){
        document.write(a + " x " + i + " = " + (a*1) + "<br />");
    }
}