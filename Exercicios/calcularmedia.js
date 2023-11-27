/*
   Fazer um algoritimo que dado 3 notas tiradas por um aluno  em um semestre de faculdade calcula e imprima  a sua média  
   e a sua classificação  conforme  a tabela abaixo.

   Classificação 
   -Média menor que 5, reprovado;
   -Média entre 5 e 7 , recuperação;
   -Média maior que 7, aprovado;

*/

const nota1 = 4.2;
const nota2 = 5.6;
const nota3 = 5.7
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5){

     console.log('Reprovado');
}else if (media >= 5 && media <= 7 ){
   
      console.log('Recuperação');
}else {
     console.log('Aprovado');
}