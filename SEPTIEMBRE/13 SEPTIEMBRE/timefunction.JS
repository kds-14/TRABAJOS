function externa() {
    console.log('Funcion externa al setTimeout')
}
const
    functionExt = () => {
        console.log('Funcion externa flecha')
    }
setTimeout(() => {
    console.log('Yo amo Soacha')
}, 2000);

setTimeout(function() {
    console.log('Funcion Clasica')
}, 3000)

setTimeout(externa, 5000);
setTimeout(functionExt, 6000);

setInterval(() => {
    console.log('Se repite')
}, 3000);

let timerId = setInterval(() => console.log('Amo el SENA'), 2000);

//despues de 7 segundos parar
setTimeout(() => {
    clearInterval(timerId);
    //console.log('stop')
}, 7000);

//Escriba un programa que escriba un contador de 1 hasta 20 donde cada numero se muestre cada 2 segundos

function num1() {
    console.log('1');
}
setTimeout(num1, 2000);

function num2() {
    console.log('2');
}
setTimeout(num2, 2000);

function num3() {
    console.log('3');
}
setTimeout(num3, 2000);

function num4() {
    console.log('4');
}
setTimeout(num4, 2000);

function num5() {
    console.log('5');
}
setTimeout(num5, 2000);

function num6() {
    console.log('6');
}
setTimeout(num6, 2000);

function num7() {
    console.log('7');
}
setTimeout(num7, 2000);

function num8() {
    console.log('8');
}
setTimeout(num8, 2000);

function num9() {
    console.log('9');
}
setTimeout(num9, 2000);

function num10() {
    console.log('10');
}
setTimeout(num10, 2000);
//////////////////////////////////////////
setTimeout(() => {
    console.log('1')
}, 2000);
setTimeout(() => {
    console.log('2')
}, 2000);
setTimeout(() => {
    console.log('3')
}, 2000);
setTimeout(() => {
    console.log('4')
}, 2000);
setTimeout(() => {
    console.log('5')
}, 2000);
//////////////////////////////////
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, (i * 2000));
}