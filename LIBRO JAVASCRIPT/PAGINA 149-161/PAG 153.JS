class Persona {
    constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    }
    /*constructor(nombre, apellido = "Doe") {
        this.nombre = nombre;
        this.apellido = apellido;
        }*/
    }
    /*let p = new Persona("Maaike", "Doe");
    console.log("Hola", p.nombre);*/
    let p = new Persona("Maaike",'Doe');
    console.log("Hola", p.nombre, p.apellido);



