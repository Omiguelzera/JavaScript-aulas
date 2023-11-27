/*
        Faça um programa para calcular valor de uma viagem 

        Você tem 3 variaveis para declarar sendo elas:

        1- Preço do combustivel;
        2- Gasto médio de combustivel do carro por km;
        3- Distância em KM da viagem;

*/

const precoCombustivel = 4.99;
const gastomedioCarroKm = 12;
const distanciaViagemKm = 3500;

const litrosConsumidos =  distanciaViagemKm / gastomedioCarroKm;
const valorGastoViagem = litrosConsumidos * precoCombustivel;

console.log('Litros consumidos: ', litrosConsumidos , 'Valor gasto na viagem: ', valorGastoViagem.toFixed(2));
