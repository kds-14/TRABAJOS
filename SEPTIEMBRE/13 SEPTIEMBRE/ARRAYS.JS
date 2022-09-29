var n=[];
var x= Math.round(Math.random()*10);
console.log(x);

var suma=0;
var prom
for (let i = 0; i < x; i++) {
    n[i]=Math.round(Math.random()*10);
}
for (let j = 0; j <x; j++) {
    suma=suma+n[j]
    prom=suma/x
}
console.log(n);
console.log(suma);
console.log(prom);
/////////////////////////////////////////////////////////
//ARRAY CON PROMISE
var n=[];
var x= Math.round(Math.random()*10);
console.log(x);

var suma=0;
var prom

const general=new Promise ((resolve)=>{
    resolve();
})
.then (()=>{
    for (let i = 0; i < x; i++) {
        n[i]=Math.round(Math.random()*10);
    }
   console.log(n);
})
.then (()=>{
    for (let j = 0; j <x; j++) {
        suma=suma+n[j]
        prom=suma/x
    }
    console.log(prom);
  console.log(suma);
})