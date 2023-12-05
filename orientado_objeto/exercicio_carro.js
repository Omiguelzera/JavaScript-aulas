/*
   1 - Crie uma classe para representar carros.
   Os carros possuem uma marca, uma cor  e um gasto médio de combustivel por kilómetros rodado.
   Crie um método que dado  a quantidade de quilómetros  e o preço do combustível  nos dê  o valor
   gasto em reais para realizar  este percurso.

*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
           this.marca = marca;
           this.cor = cor;
           this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Branco', 1/10);
console.log('Preço gasto no percurso será de R$: ' + uno.calcularGastoDePercurso(70, 5.89));
