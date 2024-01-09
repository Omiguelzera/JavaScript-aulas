function escrevaMeuNome(nome) {
    return 'Meu nome é: ' + nome;
}

function verificarIdade(idade){

    if(idade >= 18){
        return 'Maior de idade';
    }else {
        return 'Menor de idade';
    }

}

function main(){
    const idade = 25
    const nome = 'Miguel'
    
    console.log(escrevaMeuNome(nome),'\n', verificarIdade(idade));

}

main();