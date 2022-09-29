//Ejercicio 1:Funcion que llene un arreglo
//Funcion de arreglo con callback(Mostrar arreglo)
//Funcion que sume un arreglo (sume un arreglo)

//Ejercicio 2: MAYUSCULAS A MINUSCULAS
function CDF() {
    let nombre = 'Karen';
    let nombre2 = 'Dayana';
    let apellido = 'Sanabria'
    console.log(nombre.toUpperCase());
    console.log(nombre2.slice());
    console.log(apellido.toLowerCase());
}
CDF();

//PROYECTO
function MAYUSCULA(cadena){
    var a = cadena.split('')
    var mayuscula=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var cont=0;
    for (let i = 0; i < a.length; i++) {
      for (let k = 0; k < mayuscula.length; k++) {
        if (a[i]==mayuscula[k]) {
            cont=cont+1
        }
      } 
    } 
    return `las mayusculas son:${cont}`
}

function minuscula(cadena){
    var a = cadena.split('')
    var minuscula=['a','b','c','d','e','f','g','h','i','j','k','l','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var cont=0;
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < minuscula.length; k++) {
          if (a[i]==minuscula[k]) {
              cont=cont+1
          }
        } 
      }
      return `las minusculas son:${cont}`
}

function general(cb1,cb2,cadena){

    console.log(cb1(cadena),cb2(cadena))
    console.log('La frase en mayuscula es:',cadena.toUpperCase());
    console.log('la frase en minuscula es:', cadena.toLowerCase());
}
general(MAYUSCULA,minuscula,'Me Gusta Leer');
///////////////////////////////////////////////////////////////////////////////////////////
//MAYUSCULAS Y MINUSCULAS CON PROMISE 
var minuscula=['a','b','c','d','e','f','g','h','i','j','k','l','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var mayuscula=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var cont=0;
var cont2=0;
var text='  '
const general = new Promise ((resolve)=>{
  setTimeout(() => {
    resolve();
  }, 2000);
  console.log(text.toLowerCase());
  console.log(text.toUpperCase());
  console.log(text.slice());
})
.then (()=>{
  for (let i = 0; i < text.length; i++) {
    for (let k = 0; k < minuscula.length; k++) {
      if (text[i]==minuscula[k]) {
          cont=cont+1
      }
    } 
  }
console.log(`Las minusculas son: ${cont}`);
})
.then (()=>{
  for (let i = 0; i < text.length; i++) {
    for (let k = 0; k < mayuscula.length; k++) {
      if (text[i]==mayuscula[k]) {
          cont2=cont2+1
      }
    } 
  } 
console.log(`Las mayusculas son: ${cont2}`);
})
