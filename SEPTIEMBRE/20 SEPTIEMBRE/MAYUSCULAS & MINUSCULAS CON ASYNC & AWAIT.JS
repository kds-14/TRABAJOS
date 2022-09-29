function Mayus_Minus(x) {
    return new Promise ((resolve)=>{
        var text=''
        setTimeout(() => {
          resolve('El codigo ' + x);
        }, 2000);
      })
}
async function letras(x) {
    const a = await Mayus_Minus(x)
    console.log(a);
} 
letras('Funciona correctamente');

function contador_MAYUS(a) {
    return new Promise ((resolve)=>{
        var cont=0;
        var cont2=0;
    })
}