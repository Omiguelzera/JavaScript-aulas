/*
   Formula IMC 
   IMC = peso / (altura * altura )

  IMC em adultos condições
  1- abaixo de 18.5 abaixo do peso;
  2- entre 18.5 e 25 peso normal;
  3- entre 25 e 30 acima do peso;
  4- entre 30 e 40 Obeso;
  5- acima de 40 obesidade grave; 
*/


const altura = 1.55
const peso = 98;
const IMC = peso / Math.pow(altura, 2);

console.log('Caluculo do IMC' , IMC.toFixed(2));

if(IMC < 18.5){
    console.log('Abaixo do peso');
}else if (IMC >=18.5 && IMC <=25 ){
    console.log('Peso normal');
}else if(IMC >= 30 && IMC <= 40){
    console.log('Obeso');
}else{
    console.log('Obesidade grave');
}