//Es funcion que tiene dos parametros y que retorna un objeto (resolve es un callback) 
function base() {
    return new Promise((resolve, reject) => {
        resolve();
        setTimeout(() => {
            console.log('Linea de codigo dentro de la funcion promesa')
        }, 500);
    });
}
base()
    .then(() => {
        console.log('En el .then');
    })
    .then(auxiliar)

function auxiliar() {
    console.log('Funcion Auxiliar');
}
//cath se utliza para los errores

function base() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve()
            setTimeout(() => {
                console.log('Linea de codigo dentro de la funcion promesa')
            }, 500);
        } else {
            reject()
        }
    })
}
base()
    .then(() => {
        console.log('En el .then');
        return 1000;
    })
    