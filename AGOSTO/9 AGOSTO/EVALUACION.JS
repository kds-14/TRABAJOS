//llenar 3 arreglos con numeros aleatorios, el tamaño de los arreglos estara entre minimo 5  maximo 20 elementos: 
let vector=[];
let tam=Math.round((Math.random()*20-10)+10);
console.log(`Valor de variable tam:${tam}`);

for (let i = 0; i < tam ; i++) {
    vector [i]=Math.round(Math.random()*100);
}
console.log(vector);
console.log(`Tamaño del vector:${vector.length}`);

//cual de los 3 arreglos es el mas grande


//de cada uno diga que cantidad de numeros pares y que cantidad de numeros impares hay
let vec=[];
let tama=Math.round((Math.random()*20-10)+10);
console.log(`Valor de variable tam:${tama}`);

for (let i = 0; i < tama ; i++) {
    vec [i]=Math.round(Math.random()*100);
}
console.log(vec);
console.log(`Tamaño del vector:${vec.length}`);
for (let i = 0; i < vec.length; i++) 
    if (vec[i]%2==0) {
        console.log(`${vec[i]} es par`);
    } else
        console.log(`${vec[i]} es impar`);   

//rellenar los arreglos mas pequeños con los datos que el arreglo mas grande tiene demas