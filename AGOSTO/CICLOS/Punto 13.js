function invertirNumero(numero) {
    let invertido=0;
    while (numero!=0) {
        invertido=10*invertido+numero%10
        numero=(Math.floor(numero/10))
    } 
    return invertido
}
invertirNumero(12345);

//flecha
const invertirNum = (numero) => {
    let invertido = 0;
    while (numero != 0){
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};
invertirNum(12345);


