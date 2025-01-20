/* 
Declare uma variável chamada frase com o valor "Aprendendo JavaScript é divertido!".
Exiba o número de caracteres da string.
Transforme a frase toda em letras maiúsculas.
Substitua "divertido" por "incrível"
*/

const frase = "Aprendendo JavaScript é divertido";

console.log(frase.length);

console.log(frase.toUpperCase());

console.log(frase.replace("divertido", "incrivel"));

// Resolução 02
function manipularFrase() {
    const frase = "Aprendendo JavaScript é divertido";

    console.log(`Exibindo o numero de caracteres: ${frase.length}`);

    console.log(`Exibindo a frase em letra maiúscula: ${frase.toUpperCase()}`);

    console.log(`Substituindo a palavra "divertido" por "incrivel!": ${frase.replace("divertido", "incrive!")}`);
}

manipularFrase();