const {gets} = require ('./conjuntoValores');

const valor = gets();
let maiorValor = 0;
let menorValor = 100;




for(i = 0; i < valor; i++){
     const valores = gets();
     
    if(valores  > maiorValor){

         maiorValor = valores;
         
    }

    if(valores < menorValor){

     menorValor = valores;

    }

}

console.log('Maior: ' + maiorValor );
console.log(menorValor);
