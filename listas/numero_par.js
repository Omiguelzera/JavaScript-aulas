/* 
     Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < numeros.length; i ++){ // faz o o for onde i recebe o valor que esta dentro da lista [0, 1, 2...]
    const numero = numeros[i]; // const numero recebe o valor de i 
    if(numero % 2 === 0){ // verifica se numero é multiplo de dois, faz verificação. Caso n tiver resto entao entra no if.

        console.log(numero);// Imprime 

    }
}