'use strict'

var edad = prompt("Cuantos años tienes");

if (edad > '25')
{
    document.write("Ya estas viejo");
}else{
    document.write("Eres un chaval");
}
document.write('<br />');
var nombres = prompt("Como te llamas")

if(nombres=="Alberto")
{
    document.write("Bienvenido Alberto.");
}else if (nombres=="Gorki")
{
    document.write("Bienvenido Gorki");
}else{
    document.write("No te reconozco " + nombres);
}