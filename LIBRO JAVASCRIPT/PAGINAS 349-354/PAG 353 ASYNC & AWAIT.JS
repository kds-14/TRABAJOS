//Async: es una funcion que devuelve un valor. Una función async puede contener una expresión  await la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
//EJEMPLO
function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
    }
    async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
    }
    talk(2);
    talk(4);
    talk(8);

//EJERCICIO
let cont = 0;
function tpoSalida(valor) {
    return new Promise (resolve => {
        setTimeout(() => {
            cont++;
            resolve(`x valor ${valor} counter: ${cont}`);
        }, 1000);
    })
}
async function llamada(valor) {
    console.log(`preparado ${valor} contador: ${cont}`);
    const x = await tpoSalida(valor);
}
for (let i = 1; i < 4; i++) {
    llamada(i);
}