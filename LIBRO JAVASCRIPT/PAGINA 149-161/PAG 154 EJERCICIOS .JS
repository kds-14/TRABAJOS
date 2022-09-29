//ACTIVIDAD
//1.	Cree una clase para Persona que incluya el constructor para nombre y apellido.
class persona {
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

//2.	Cree una variable y asigne un valor al nuevo objeto Persona usando el nombre y apellido de su amigo.  

let a=new persona ('Angie','Cubillos');

//3.	Ahora agregue una segunda variable con el nombre de otro amigo usando su nombre y apellido.
let b=new persona ('Paula','Gomez');

//4.	Envíe a ambos amigos a la consola con un saludo de hola.
console.log('Hola', a.nombre, 'y', b.nombre);

/////////////////////////////////////////////////////////////////////////////////////////////////

class Persona {
    constructor(nombre, apellido) {
        this.nombre= nombre;
        this.apellido = apellido;
        }
    saludo() {
        console.log("Hola! Yo soy", this.nombre);
        }        
}
let p = new Persona("Maaike", "van Putten");
p.saludo();
