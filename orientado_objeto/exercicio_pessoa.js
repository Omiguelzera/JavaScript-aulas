/*
   2- Crie uma classe para representar pessoas. 
     Para cada pessoa teremos os atributos nome, peso e altura.
     As pessoas devem ter a chance de dizer  o valor de seu IMC(IMC = peso / (altura * altura));
     Instancia uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura  e peça  ao José para dizer o valor 
     do seu IMC; 
*/

class Pessoa {

    nome;
    peso;
    altura;
     
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
         return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
          const imc = this.calcularIMC();

          if(imc < 18.5){
             return ('Abaixo do peso');
        }else if (imc >=18.5 && imc <=25 ){
             return ('Peso normal');
        }else if(imc >= 30 && imc <= 40){
            return ('Obeso');
        }else{
             return ('Obesidade grave');
        }

    }
}

const p = new Pessoa('José', 70, 1.75);

console.log( p.nome + ' seu IMC é de ' 
+ p.calcularIMC().toFixed(2) 
+ '. Seu IMC está classificado como : ' 
+ p.classificarIMC());