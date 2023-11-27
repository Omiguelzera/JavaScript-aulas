/*
  Eleborar um algoritmo que calcule oque deve ser pago por um produto, considerando o preço normal de etiqueta
  e a escolha da condiçãod e pagamento
  
  Utilize os códigos da tabela a seguir para ler qual  a condição de pagamento escolhido para efetuar o cálculo 
  adequado 


  Código Condição de pagamento ;

- À vista Débito, recebe 10 % de desconto;
- À vista no Dinheiro ou no pix , recebe 15 % de desconto;
- Em duas vezes, preço normal  de etiqueta semjuros ;
- Mais de duas vezes , preço normal de etiqueta mais 10 % de juros; 

*/

const precoEtiqueta = 500;
const tipoPagamento = 4;

if(tipoPagamento === 1){
    console.log('Débito a vista');
    console.log('R$:', precoEtiqueta - (precoEtiqueta * 0.10));
}else if(tipoPagamento === 2){
    console.log('Dinheiro ou pix a vista');
    console.log('R$:', precoEtiqueta - (precoEtiqueta * 0.15));    
}else if(tipoPagamento === 3) {
    console.log('Duas vezes ');
    console.log('R$:', precoEtiqueta );
}else {

    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}