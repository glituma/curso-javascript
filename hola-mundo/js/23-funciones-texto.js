'use strict'

//Transformar textos
var numero= 444;
var texto1 = "Bienvenido al Curso de JavaScript";
var texto2 = "muy buen curso";

var dato = numero.toString();
    console.log(dato);
    dato = texto1.toUpperCase();
    console.log(dato);
    dato = texto1.toLowerCase();
    console.log(dato);

//calcular longitud que tiene un texto

var nombre = "Todos estamos bien";
var nombreList = ["hola","Chuas","Todos"];
console.log(nombre.length);
console.log(nombreList.length);

//Concatenar - Unir Texto

var textoTotal = texto1 + " " + texto2;
    textoTotal = texto1.concat(" - "+texto2);
console.log(textoTotal);

var busqueda = texto1.indexOf("al");
console.log(busqueda);
var busqueda = textoTotal.lastIndexOf("so");
console.log(busqueda);