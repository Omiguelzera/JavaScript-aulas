const {gets} = require ('./tabuada');

const numeroDoCalculo = gets();


for (i = 0; i <= 10; i++){
    console.log(numeroDoCalculo *  i);
}

