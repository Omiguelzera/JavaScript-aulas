function calcularIMC(altura, peso){
 
    return peso / Math.pow(altura, 2)

}

function classificarIMC(imc){

    
if(imc < 18.5){
    return 'Abaixo do peso';
}else if (imc >=18.5 && imc <=25 ){
    return 'Peso normal';
}else if(imc >= 30 && imc <= 40){
    return 'Obeso';
}else{
    return 'Obesidade grave';
}

}

function main(){
    const altura = 1.55
    const peso = 98;
    
    
    const imc = calcularIMC(altura, peso);
    console.log(classificarIMC(imc));

}

main();




