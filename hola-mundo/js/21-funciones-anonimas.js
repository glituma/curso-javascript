'use strict'

//Funciones Anónimas
//Es una función que no tiene nombre
/*
var pelicula = function(nombre){
    return "La película es: " + nombre;
}
*/
function sumame(numero1, numero2, sumaYMuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7,dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos: ", (dato*2))
});