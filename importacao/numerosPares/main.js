const {gets} = require ('./numerosParesArray');

const numeros = gets();

for (i = 0; i < numeros; i ++){
         const numero = gets();;

         if(numero %2 === 0){

            console.log(numero);
         }

}