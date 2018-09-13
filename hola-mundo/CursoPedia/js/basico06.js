'use strict'

function miHeroe(nombre, raza, fuerza){
    this.nombre = nombre;
    this.raza = raza;
    this.fuerza = fuerza;
}

var miHeroe = new miHeroe("Gorki","Fenomenal","3500");

document.write("El nombre de mi Héroe es " + miHeroe.nombre);

var primerDigito = prompt("Ingrese el primer dígito: ");
var segundoDigito = prompt("Ingrese el segundo dígito: ")

class calculadora {
    constructor() {
        this.multiplicacion = function (valor1, valor2) {
            return (valor1 * valor2);
        };
    }
}

var calMultiplicacion = new calculadora();
alert(calMultiplicacion.multiplicacion(primerDigito,segundoDigito));
