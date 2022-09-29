class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        }
        saludo() {
        console.log("Hola!");
        }
        compliment(name, object) {
        return "Ese es un maravilloso " + object + ", " + name;
        }
}
let p=new Persona('Harry');
let compliment = p.compliment("Harry", "sombrero");
console.log(compliment);