/*
        Faça um programa para calcular valor de uma viagem 

        Você tem 5 variaveis para declarar sendo elas:

        1- Preço da gasolina;
        2- Preço do etanol;
        3- Tipo de combustivel do carro;
        4- Gasto médio de combustivel do carro por km;
        5- Distância em KM da viagem;

*/

const precoGasolina = 5.79;
const precoEtanol = 4.69;
let tipoCombustivelCarro = 'Gasolina';
const gastomedioCarroKm = 12;
const distanciaViagemKm = 200;
const litrosConsumidos =  distanciaViagemKm / gastomedioCarroKm;



if (tipoCombustivelCarro === 'Gasolina'){
     
    
    const valorGastoViagem = litrosConsumidos * precoGasolina;
    console.log('Com gasolina : ', valorGastoViagem.toFixed(2));
    
}else{

    const valorGastoViagem = litrosConsumidos * precoEtanol
    console.log( 'Com etanol : ', valorGastoViagem.toFixed(2));
}