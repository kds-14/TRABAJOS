/*NOTAS:
CRECIMIENTO EXPONENCIAL
N= Tamaño de la poblacion: 
r= tasa de crecimiento 
r= nacimientos - muertes/n
dN/dt= r N
r=1

N(t)=N(1+r)elevar a t(tiempo)
*/

//Generar numero aleatorio entre 1000 y 10000
//tasa de crecimiento en aleatorio maximo 30 de muerte 3
//Calculo en 20 años del crecimiento de la poblacion

function tamaño() {
    let N=Math.round(Math.random()*1000-10000);
    var nacimientos=Math.round(Math.random()*(N*0.10));
    var tasaMuertes=Math.round(Math.random()*(N*0.03));
    var r=(nacimientos-tasaMuertes/N);

    for (let i = 0; i < 20; i++) {
        var crecimiento=Math.pow(N*(1+r),i )
        console.log(i);
        console.log(crecimiento);
    }
    
}
console.log (tamaño());

////////////////////////////////////////////////////////////////////
//al 10% de la poblacion hacer una promesa que calcule la cantidad de la poblacion 
let N=Math.round(Math.random()*1000-10000);
function tamaño() {
    new Promise((resolve) => {
        var nacimientos=Math.round(Math.random()*(N*0.10));
        var tasaMuertes=Math.round(Math.random()*(N*0.03));
        var r=(nacimientos-tasaMuertes/N);
        resolve()
    }) 
.then(()=>{
    for (let i = 0; i < 21; i++) {
    var crecimiento=Math.pow(N*(1+r),i )
    } 
    console.log(i);
    console.log(crecimiento);
    })
}
console.log (tamaño());


/**/ 





//calcular el crecimiento neto de la poblacion de los 10 periodos