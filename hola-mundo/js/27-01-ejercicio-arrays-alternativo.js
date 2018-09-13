'use strict'
 
/*
1. Pida 6 numero por pantalla y los agregua a un array
2. Mostrar el array completo en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido, que diga si lo encuentra y su posición
(Se valorará el uso de funciones)
*/
 
//1
let num, contador, numero, numeros, busqueda;
contador = 0;
numeros = [];
 
function teclear(){
    num = parseInt(prompt('Ingrese un número', 0));
    while(isNaN(num)){
        num = parseInt(prompt('Intentelo nuevamente!!! \n Ingrese un número', 0));
    }
    numeros.push(num);
}
 
function introducir(){
    while(contador < 6){
        teclear();
        contador++;
    }
}
 
function imprimir(){
    for(numero in numeros){
        document.write(
            `${numeros[numero]}`
        );
        console.log(numeros[numero]);
    }
}
 
function deMenorAMayor(n1,n2){
    return n1 - n2;
}
 
function ordenarMenorMayor(){
    numeros.sort(deMenorAMayor);
}
 
function deMayorAMenor(n1, n2){
    return n2 - n1;
}
 
function ordenarMayorMenor(){
    numeros.reverse(deMayorAMenor);
}
 
function cuantosHay(){
    document.write(`Hay ${numeros.length} elementos en el arreglo`);
    console.log('Hay ' + numeros.length + ' elementos en el arreglo');
}
 
function estaElemento(){
    num = parseInt(prompt('Busque un número', 0));
    while(isNaN(num)){
        num = parseInt(prompt('Intentelo nuevamente!!! \n Busque un número', 0));
    }
    busqueda = numeros.some(numero => numero == num);
    if(busqueda){
        document.write(`Esta el numero buscado en el indice ${numeros.indexOf(num)} en el arrego ordenado`);
        console.log('Esta el numero buscado en el indice '+ numeros.indexOf(num) + ' en el arrego ordenado');
    } else {
        document.write(`No esta el numero buscado`);
        console.log('No esta el numero buscado');
    }
}
 
function operaciones(){
    introducir();
    document.write(`Estos son los numeros introducidos por teclado`);
    console.log('Estos son los numeros introducidos por teclado');
    imprimir();
    ordenarMenorMayor();
    document.write(`Estos son los numeros ordenados de menor a mayor`);
    console.log('Estos son los numeros ordenados de menor a mayor');
    imprimir();
    ordenarMayorMenor();
    document.write(`Estos son los numeros ordenados de mayor a menor`);
    console.log('Estos son los numeros ordenados de mayor a menor');
    imprimir();
    cuantosHay();
    estaElemento();
}
 
operaciones();