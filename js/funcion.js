//Funcion
//Una función es todo trozo de código que se puede reutilizar las veces que queramos
/*
function calculadora(num1, num2) {
  console.log("Suma: " + (num1 + num2));
  console.log("Resta: " + (num1 - num2));
  console.log("Multiplicación: " + num1 * num2);
  console.log("Divición: " + num1 / num2);
  console.log("----------------------------------");
}

for (let i = 1; i <= 5; i++) {
  console.log(i + " y 2");
  calculadora(i, 2);
}


//Función con Return
function retorno(numero) {
  return numero;
}

console.log(retorno(6));


//VarLet
//Var es utilizada para declarar variables globales
function funvar() {
  var edad = 21;
  if (true) {
    var edad = 22;
    console.log(edad);
  }
  console.log(edad);
}
funvar();
//Let es utilizada para declarar variables que se limiten al bloque
function funlet() {
  let edad = 25;
  if (true) {
    let edad = 26;
    console.log(edad);
  }
  console.log(edad);
}
funlet();
*/

//Parametros opcionales
function sumar(a, b, c = 5) {
  return a + b + c;
}
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2));
