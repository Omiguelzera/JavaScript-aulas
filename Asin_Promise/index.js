const promessaDeUmNumeroQualquer = new Promise ((resolve, reject) => {

    setTimeout(() => {
        const numero = parseInt(Math.radom() = 100)
        resolve(numero)
    }, 1000);
})



promessaDeUmNumeroQualquer
        .then((value) => {
            console.log(value)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            console.log("Finalizou ")
        })