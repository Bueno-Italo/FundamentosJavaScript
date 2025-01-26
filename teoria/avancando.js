// === Avançando em JavaScript ===

/**
 * Manipulação de Arrays
 * Este documento demonstra algumas operações básicas e intermediárias com arrays em JavaScript,
 * incluindo métodos para adicionar e remover elementos, bem como o uso de funções como map, filter, e reduce.
 */

// Adicionar um elemento na primeira posição do array
const frutas = ["Laranja", "Maçã"];
frutas.unshift("Acerola"); // Adiciona "Acerola" no início do array
console.log("Frutas após unshift:", frutas);

// Remover o primeiro elemento do array
frutas.shift(); // Remove o primeiro elemento do array
console.log("Frutas após shift:", frutas);

// Uso de métodos de array: map, filter, reduce e find
const numeros = [1, 2, 3, 4, 5, 6, 7];

// find => Retorna o primeiro elemento que atende ao critério fornecido
const numeroPar = numeros.find((num) => num % 2 === 0); // Procura o primeiro número par
console.log("Primeiro número par encontrado:", numeroPar);

// filter => Retorna todos os elementos que atendem ao critério fornecido
const numerosPares = numeros.filter((num) => num % 2 === 0); // Filtra todos os números pares
console.log("Todos os números pares:", numerosPares);
