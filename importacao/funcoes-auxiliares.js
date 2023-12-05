const entradas = [5, 10, 98, 23];

let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}


module.exports = {gets};