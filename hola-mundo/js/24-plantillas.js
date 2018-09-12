'use strict'

//plantillas de texto

var nombre = prompt("Dime tu nombre: ")
var apellidos = prompt("Dime tus apellidos: ")
//var texto = "Mi nombre es " + nombre + ", mis apellidos son " + apellidos;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h4>Mis apellidos son: ${apellidos}</h4>
`;

document.write(texto);