// === Exercicio 1: ===
// Crie um script que imprima "Olá, Mund0!"

console.log("Olá, Mundo!")

// === Exercicio 2: ===
//Dado o valor de uma string "1234", converta-os em um numero e exiba o tipo da constiável no console.

const valorString = "1234";
const valorConvertido = Number(valorString);

console.log(`O tipo da variável convertida é ${typeof valorConvertido}`);

// === exercicio 3: ===
// Dado uma string "JavaScript é incrivel", escreca um codigo que conte quantos caracteres a string possui e quantas palavras existem na frase.

const frase = "JavaScript é incrivel";

console.log(`A quantidade de caracteres na string é: ${frase.length}`);

console.log(`A quantidade de palavras existentes na frase é: ${frase.split(" ").length}`)


// === Exercicio 4: === 
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const meuArray = ["italo", "jessica", "zoe", "maya", "isis"];

for(let i = 0; i < meuArray.length; i++) {

    console.log(meuArray[i]);
}
