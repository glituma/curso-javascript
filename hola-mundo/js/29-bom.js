'use strict'

//BOM Browser Object Model

function getBom(){
    //Muestra el tamaño de la de la ventana abierta
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    //Muestra el tamaño del monitor del cliente
    console.log(screen.width);
    console.log(screen.height);
    //Muestra la url
    console.log(window.location);
    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}


this.getBom();
