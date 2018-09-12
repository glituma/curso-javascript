'use strict'

/*
1. Pida 6 numero por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden
5. Cuentos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
(Se valorará el uso de funciones)
*/

function montrarArray(elementos, textoCustom=""){
    document.write("<h2>Contenido del Array "+textoCustom+"</h2>")
    document.write('<ul>')    
    elementos.forEach((numero, index) => {
        document.write('<li>'+numero+'</li>');
    });
    document.write('</ul>')    
}

//1.---
var numeros = new Array();
/*
do{    
    numeros.push(parseInt(prompt("Introduce un número:",0));
}
while (numeros.length < 6);
*/
for (var i=0; i<6; i++){
    numeros.push(parseInt(prompt("Introduce un número:",0)));
}

document.write("<h2>Contenido del Array</h2>")
document.write('<ul>')
/*
for(let indice in numeros){
    document.write('<li>'+numeros[indice]+'</li>')
}
*/
numeros.forEach((numero, index) => {
    document.write('<li><strong>'+numero+'</strong></li>');
});
document.write('</ul>')

numeros.sort(function(a, b){return a-b}); //ordenar numeros de forma ascedente
this.montrarArray(numeros,'Ordenado');

numeros.reverse(function(a, b){return a-b});
this.montrarArray(numeros,'Invertido');

document.write("El array tiene: "+numeros.length+" elementos.")

//Busqueda
var busqueda = parseInt(prompt("Buscar un número ",0));
var posicion = numeros.findIndex(numero => numero == busqueda);
//var posicion = numeros.indexOf(busqueda); //alternativa
if(posicion && posicion != -1){
    document.write("<h2>ENCONTRADO Nº. "+busqueda+"</h2>")
    document.write("<h3>La posición de la búsqueda es: " + posicion+"</h3>");
}else{
    document.write("<h2>Nº. "+busqueda+" no ENCONTRADO</h2>")
}
//var posicion = numeros.indexOf(búsqueda);

console.log(numeros);
