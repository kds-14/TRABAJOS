function receptora(cb1, cb2, parametro) {
    cb1()
    setTimeout(() => {
        console.log('Dentro de la funcion receptora')
    }, 0);
    cb2(parametro)
}

function funcionArgumento(parametro) {
    console.log(`${parametro} de la funcion argumento`);
}

receptora(() => console.log('Funcion anonima', 'Funcion'), funcionArgumento, 100);