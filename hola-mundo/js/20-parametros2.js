'use strict'

//Parametros REST y SPREAD

function litadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("Resto de Frutas: ", resto_de_frutas);
}

litadoFrutas("naranja", "manzana","sandia","mandarina","Melon","Papaya");

var frutas = ["naranja","manzana"]

litadoFrutas( ...frutas,"sandia","mandarina","Melon","Papaya");