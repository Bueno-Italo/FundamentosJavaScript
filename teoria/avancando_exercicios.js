// === Eaxercicio de Manipulçação de Array ===

// Crie uma lista de compras que é incialemente vazia.
// Adicione 5 itens á lista usando push().
// Agora, remova o primeiro item da lista usando shift().

const listaCompras = [];

console.log( typeof listaCompras);

listaCompras.push("Arroz", "Feijão", "Bife", "Salada", "Suco");

console.log(listaCompras)

listaCompras.shift();

console.log(listaCompras)

// === Exercicio de Manipulação de Array - find() ===
// Você tem um array de nuúmeros: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro numero que é divisivel por 7 e maior que 10.

const numerosArray = [3, 7, 14, 21, 29, 36, 42];

console.log(typeof numerosArray);

console.log(numerosArray);

const numeroEncontrado = numerosArray.find((num) => num > 10 && num % 7 === 0);

console.log(numeroEncontrado)


// === Exercicio de Manipulação de Array - find() ===

// Dado um array de números: [5, 10, 15, 20, 25, 30, 35]
// Use a função filter() para criar um novo array que contenha apenas os numeros maiores que 20.
const arrayNum = [5, 10, 15, 20, 25, 30, 35, 40];

console.log(arrayNum);

const numMaior = arrayNum.filter((arrayNum) => arrayNum > 20);

console.log(numMaior);

// === Exercicio de Manipulação de Array - split(), trim() ===
// Dada a string: " Bom dia, mundo! "
// Remova os espaços em branco no início e no final da string em seguida, divida a string em palavras.

const frase = " Bom dia, mundo! ";

const palavras = frase.trim().split(" ");

console.log(palavras);