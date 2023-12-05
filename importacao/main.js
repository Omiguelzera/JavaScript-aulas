/*const {gets} = require ('./funcoes-auxiliares');

const numeroSorteados = [];

for(i = 0; i < 4; i++){
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

console.log(numeroSorteados);

let numeroMaior = 0;

for(i = 0; i < numeroSorteados.length; i++){
    const numeroSorteado = numeroSorteados[i];
    if(numeroSorteado > numeroMaior){
            numeroMaior = numeroSorteado;
    }
}

console.log(numeroMaior); 
*/

// Forma mais simplificada de fazer : 


const {gets} = require ('./funcoes-auxiliares');

const totalNumerosSorteados = gets();
let maiorNumeroEncontrado = 0;

for(i = 0 ; i < totalNumerosSorteados; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorNumeroEncontrado){
        maiorNumeroEncontrado = numeroSorteado;
    }
}
 

console.log(maiorNumeroEncontrado);



