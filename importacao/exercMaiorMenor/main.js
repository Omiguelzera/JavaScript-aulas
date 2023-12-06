const {gets} = require ('./conjuntoValores');

const valor = gets();
let maiorValor = 0;
const menorValor = Math.min(gets());

for(i = 0; i < valor; i++){
     const valores = gets();
     
    if(valores  > maiorValor || menorValor < valores ){

         maiorValor = valores;
    }

}

console.log('Maior: ' + maiorValor );
console.log(min);