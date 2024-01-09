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


function aplicarDesconto(valor, desconto){
    
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros){
    return valor + ( valor* (juros / 100));

}


function formadePagamento(opcao){
    
    if(opcao === 1){

        return 'Débito a vista \n R$:' + 
        aplicarDesconto(precoEtiqueta, 10);

    }else if(opcao === 2){

        return 'Dinheiro ou pix a vista \n' +
        aplicarDesconto (precoEtiqueta, 15);  

    }else if(opcao === 3) {
        return 'Duas vezes \n R$: ' +
        (precoEtiqueta);

    }else {
    
        return 'Mais vezes \n R$:'+
        aplicarJuros(precoEtiqueta, 10);
    }

}


function main(){
   
    const opcao = 4;
   
    console.log(formadePagamento(opcao));
}

main();

