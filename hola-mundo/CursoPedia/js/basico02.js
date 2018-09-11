'use strict'


var nombre = prompt("Como te llamas");
var edad = prompt("Cuantos años tienes");
var ciudad = prompt("Donde vives");

document.write("Mi nombre es:" + nombre.concat(", tengo ",edad," años y vivo en: ",ciudad));