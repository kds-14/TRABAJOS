//Escribir un programa que visualice la siguiente figura, utilizando ciclos. El usuario decide cuantas líneas quiere imprimir * 

function piramide(numPisos) {
    for (let i = 0; i < numPisos; i++) {
    let piso='';
    for (let j = 0; j < i; j++) {
        piso=piso + '*';
    }
    console.log(piso);
    }
}
piramide(15);

//flecha
const piram= (numPisos)=>{
    for (let i = 0; i < numPisos; i++) {
        let piso='';
        for (let j = 0; j < i; j++) {
            piso=piso + '*';
        }
        console.log(piso);
        }
    }  
piram(15);