//SETTIMEOUT
function saludo(){
    console.log("Hola");
  }
  
  setTimeout(saludo, 3000);

clearTimeout(saludo);
console.log(`Tiempo de espera saludo ${saludo} ha sido cerrado.`);

//EJEMPLO 2
function saludos(nombre, rol) {
  console.log(`Hola mi nombre es ${nombre}`);
  console.log(`Soy ${rol}`);
}
setTimeout(saludos, 3000, 'Karen', 'Programadora');

function cerrar (saludos) {
  clearTimeout(saludos);
console.log(`Tiempo de espera saludo ${saludos} ha sido cerrado.`);
}



//SETINTERVAL
var myVar;

function myFunction() {
    myVar = setInterval(alertFunc, 3000);
}
console.log(myFunction);
function alertFunc() {
    alert("Hello!");
}
console.log(alertFunc);