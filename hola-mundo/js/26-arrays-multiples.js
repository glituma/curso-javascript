'use strict'

var categorias = ['Acción','Terror','Comedia','Drama'];
var peliculas = ['Vatos locos','La vida es bella','Rápidos y Furiosos'];
var lenguajes = new Array("PHP","JS","Go","Java","C#","ASP.NET");

var cine = [categorias, peliculas];

//console.log(cine);
//console.log(cine[0][1]); //terror
//console.log(cine[1][2]); 

//operaciones con arrays
/*
var elemento = "";

do{
    elemento = prompt("Introduce tu película favorita :");
    peliculas.push(elemento);
}
while (elemento != "ACABAR")

peliculas.pop(); //elimina el ultimo elemento del array
*/
/*
var indice = peliculas.indexOf('La vida es bella');

if (indice > -1){
    peliculas.splice(indice,1); //elimina elementos de un array
}

var titulosPeliculas = peliculas.join(); //pasar de array a string

var cadena = "yo, me, llamo, gorki"
var cadena_array = cadena.split(", "); //pasar de string a array
*/
//peliculas.sort(); //ordenar asc 
//peliculas.reverse(); //ordenar desc
document.write('<ul>')
for(let indice in lenguajes){
    document.write('<li>'+lenguajes[indice]+'</li>')
}
document.write('</ul>')

//Busquedas en array

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

var busqueda1 = lenguajes.find(lenguaje => lenguaje == "Go");
var busquedaIndex = lenguajes.findIndex(lenguaje => lenguaje == "Go");

//Buscar numeros
var precios = [10,20,80,5,100];

var busqueda = precios.some(precio => precio >= 50); //buscar que cumplan una condición concreta

console.log(busqueda);


