'use strict'

// DOM - Document object model

function cambiaColor(colorFondo, color){
    caja.style.background = colorFondo;
    caja.style.color = color;
}

function cambiaStylos(elemento){
    elemento.style.background = "Red";
    elemento.style.padding ="5px";
    elemento.style.color= "white";
}
//Conseguir elementos con un ID concreto
//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");

caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white"
caja.className = "hola hola2";

this.cambiaColor("black","yellow");

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

//todosLosDivs.forEach(valor, indice) => {

/*
var seccion = document.querySelector('#miSeccion');
var hr = document.createElement('hr');

var valor;

for(valor in todosLosDivs){  
    if(typeof(todosLosDivs[valor].textContent) == 'string'){
        var parrafo = document.createElement('p');
        var texto =  document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        seccion.appendChild(parrafo);
    }  
    
}
seccion.appendChild(hr);
*/

/*
var contenidoTexto = todosLosDivs[2];
contenidoTexto.innerHTML = "ME CAMBIAN :(";

this.cambiaStylos(contenidoTexto);

console.log(todosLosDivs);
console.log(contenidoTexto);
*/
//Conseguir elementos por su clase css

//console.log(caja);


//conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
/*
for(var div in divsRojos){
    if (divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "Orange";
    }    
}
*/

/*
for(var div in todosLosDivs){
    if (todosLosDivs[div].className == "rojo"){
        todosLosDivs[div].style.background = "Orange";
    }    
    if (todosLosDivs[div].className == "amarillo"){
        todosLosDivs[div].style.background = "Purple";
        todosLosDivs[div].style.color = "white";
    }    
}
*/


//Query selector

var id = document.querySelector("#encabezado"); //# para h1 div hr p table
var listaClaseRojo = document.querySelectorAll(".rojo");

console.log(listaClaseRojo);


//Plus
//https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
