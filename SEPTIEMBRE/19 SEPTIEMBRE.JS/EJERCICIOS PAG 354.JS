let cont =0;
function act() {
    return new promise (resolve=>{
        setTimeout(() => {
            cont++
            resolve({cont,act})
        }, 1000);
    })
}

