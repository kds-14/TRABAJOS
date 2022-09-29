//Calcular  el  máximo  de  números  positivos  introducidos  por teclado,    sabiendo    que    metemos    números    hasta    que introduzcamos uno negativo. El negativo no cuenta. 
x=Math.round(Math.random()*10);
console.log(x);
if (x>0) {
    console.log('Es positivo');
}else if (x<0){
    console.log('Es negativo');
}

//flecha
const posNeg=()=>{
    x=Math.round(Math.random()*10);
console.log(x);
if (x>0) {
    console.log('Es positivo');
}else if (x<0){
    console.log('Es negativo');
}
}
posNeg();