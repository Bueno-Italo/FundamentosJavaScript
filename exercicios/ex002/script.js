/* 
Declare uma variável chamada frase com o valor "Aprendendo JavaScript é divertido!".
Exiba o número de caracteres da string.
Transforme a frase toda em letras maiúsculas.
Substitua "divertido" por "incrível"
*/

/* 
Este exercício demonstra como manipular strings no JavaScript utilizando operações básicas. Os objetivos do exercício são:

1. Declarar uma variável chamada "frase" contendo o texto "Aprendendo JavaScript é divertido".
2. Exibir o número de caracteres da string.
3. Converter todo o conteúdo da string para letras maiúsculas utilizando.
4. Substituir a palavra "divertido" por "incrível".

Este código está dividido em duas abordagens: manipulação direta e encapsulamento em uma função reutilizável.
*/

// Declaração e manipulação direta da variável frase
const frase = "Aprendendo JavaScript é divertido";

// Exibe o número de caracteres da string
console.log("Número de caracteres:", frase.length);

// Exibe a string em letras maiúsculas
console.log("Frase em letras maiúsculas:", frase.toUpperCase());

// Substitui "divertido" por "incrível" e exibe a nova string
console.log("Frase com substituição:", frase.replace("divertido", "incrível"));

/* 
Função que encapsula as manipulações como uma abordagem alternativa.
Pode ser reutilizada ou adaptada em outros contextos.
*/
function manipularFrase() {
    const frase = "Aprendendo JavaScript é divertido";

    // Exibe o número de caracteres da string
    console.log(`Exibindo o número de caracteres: ${frase.length}`);

    // Exibe a string em letras maiúsculas
    console.log(`Exibindo a frase em letras maiúsculas: ${frase.toUpperCase()}`);

    // Substitui "divertido" por "incrível" e exibe a nova string
    console.log(`Substituindo a palavra "divertido" por "incrível": ${frase.replace("divertido", "incrível")}`);
}

// Executa a função de manipulação
manipularFrase();
