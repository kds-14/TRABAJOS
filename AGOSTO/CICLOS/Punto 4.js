function nPerfectos() {
    for (let i = 1; i < 1000; i++) {
        suma=0;
    for (let j = 0; j < i; j++) {
        if (i % j == 0) {
            suma = suma + j;
        }
        if (i == suma) {
            console.log(i, 'Es un numero perfecto');
        }
    }
    }
}
nPerfectos();