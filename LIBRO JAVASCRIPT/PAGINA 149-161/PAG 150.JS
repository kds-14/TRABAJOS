//CREANDO UNA VARIABLE
let perro = { nombrePerro: "JavaScript",
peso: 2.4,
color: "cafe",
raza: "chihuahua"
};  
////////////////////////////////////////////////////////////////
//CON CLASES
class ClassName {
    constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    }
    }
    let obj = new ClassName("arg1", "arg2");
console.log(ClassName);
///////////////////////////////////////////////////////////////////
//CON FUNCTION
function perro(nombrePerro, peso, color, raza) {
    this.nombrePerro = nombrePerro;
    this.pesp = peso;
    this.color = color;
    this.raza = raza;
    }
    let perro = new perro("Jacky", 30, "brown", "labrador");
/////////////////////////////////////////////////////////////////////
//CON CLASS CORRECTAMENTE
class Perro {
    constructor(nombrePerro, peso, color, raza) {
    this.nombrePerro = nombrePerro;
    this.peso = peso;
    this.color = color;
    this.raza = raza;
    }
    }
    let perro = new Perro("JavaScript", 2.4, "brown", "chihuahua");
    console.log(perro.nombrePerro, "es un", perro.raza, "y pesa", perro.peso,
    "kg.");
