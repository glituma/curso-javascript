'use strict'

//Bucle While

var year = 2018;

while (year != 1991)
{
    console.log("Estamos en el año: " + year);
    // debugger; punto de interrupción
    year--;
}

//Do while
var year = 20;

do {
    alert("solo cuando sea diferente a 20");
    if(year==23){
        break;
    }
    year++;    
}while(year < 25);