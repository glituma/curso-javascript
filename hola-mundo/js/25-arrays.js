'use strict'

//arrays, arreglos, matrices

var nombre = "Gorki";
var nombres = ["Juan","Pepe","Julia","Pamela","Gaby","Victor","Adrian"];

var lenguajes = new Array("PHP","JS","Go","Java","C#","ASP.NET");
/*
console.log(nombres);
console.log(lenguajes);

document.write(nombres[2],'<br />');
document.write(lenguajes[4]);
*/
//array avanzados
/*
console.log(nombres.length);

var elemento = parseInt(prompt("Que elemento del array quieres??",0));

if (elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length);
}else{
    alert(nombres[elemento]);
}
*/
document.write("<h2>Todos los lenguajes de programación del 2018</h2>")
document.write('<ul>');
/*
for ( var i=0; i < lenguajes.length; i++){
    document.write('<li>' + lenguajes[i] + '</li>');
}
*/
lenguajes.forEach((elemento, index, data)=>{
    //console.log(data);
    document.write('<li>' + index + " - " + elemento + '</li>');
});
document.write('</ul>')