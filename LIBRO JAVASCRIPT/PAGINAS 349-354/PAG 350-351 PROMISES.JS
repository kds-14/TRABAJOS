//Promise es una funcion que tiene dos parametros que son (resolve y reject)

//EJEMPLO PROMESA
/*let promise = new Promise(function (resolve, reject) {
//hacer algo que podría tomar un tiempo
//establezcamos x en su lugar para este ejemplo
    let x = 20;
    if (x > 10) {
    resolve(x); // exito
    } else {
    reject("Too low"); // error
    }
    });
    promise.then(
    function (value) {
    console.log("Exito:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
    );*/
//////////////////////////////////////////////////////////////
//FUNCTION PROMESA
/*const promise = new Promise((resolve, reject) => {
    resolve("exito");
    })
    .then(value => {
        console.log(value);
        return "nosotros";
        })
        .then(value => {
        console.log(value);
        return "pueden";
        })
        .then(value => {
        console.log(value);
        return "cadena";
        })
        .then(value => {
        console.log(value);
        return "promesas";
        })
        .then(value => {
        console.log(value);
        })
        .catch(value => {
        console.log(value);
        })*/
///////////////////////////////////////////////////////////
//FUNCTION PROMISE CON CATCH
const promise = new Promise((resolve, reject) => {
    reject("ups... ");
    })
    .then(value => {
    console.log(value);
    return "nosotros";
    })
    .then(value => {
        console.log(value);
        return "pueden";
        })
        .then(value => {
        console.log(value);
        return "cadena";
        })
        .then(value => {
        console.log(value);
        return "promesas";
        })
        .then(value => {
        console.log(value);
        })
        .catch(value => {
        console.log(value);
        })