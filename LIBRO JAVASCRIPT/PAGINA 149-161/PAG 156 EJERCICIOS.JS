//1.	Usando la clase Persona del ejercicio de práctica 7.1, agregue un método llamado nombre completo, que devuelve el valor concatenado de nombre y apellido cuando se invoca.

class persona {
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    nombreCompleto(){
    console.log('Karen Sanabria');
    }
    compliment(nombreCompleto){
        return '¿Cual es tu nombre y apellido?' + nombreCompleto;
    }
}
let p=new persona('Karen Sanabria')
let compliment=p.compliment (' Mi nombre y apellido es Karen Sanabria');
console.log(compliment);

//2.	Cree valores para person1 y person2 utilizando los nombres y apellidos de dos amigos.  

class persona {
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    person1(nombre, apellido){
        return 'Mi nombre es ' + nombre+apellido;
    }
    person2(nombre, apellido){
        return 'mi nombre es ' + nombre+apellido;
    }
}
let a=new persona('Paula');
let person1=a.person1 ('Paula ','Gomez y');
let b=new persona('Angie');
let person2=b.person2('Angie ','Cubillos.');
console.log(person1, person2);


//3.	Utilizando el método nombre completo dentro de la clase, devuelva el nombre completo de una o ambas personas.

class persona {
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    nombreCompleto(){
        console.log('Maria Paula Gomez Caballero');
    }
    nombreCompleto2(){
        console.log('Angie Vanessa Cubillos Herrera');
    }
    complemento(nombreCompleto, nombreCompleto2){
        return 'Nuestros nombres completos son ' + nombreCompleto + nombreCompleto2;
    }    
}

let c=new persona ('Angie');
let complemento=c.complemento('Angie Vanessa Cubillos Herrera y ','Maria Paula Gomez Caballero');
console.log(complemento);