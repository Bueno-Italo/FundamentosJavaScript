//  ========== Fundamentos de JavaScript ==========
// Este arquivo contém exemplos e anotações sobre variáveis e tipos de dados.

// === Declaração de Variáveis ===
// Existem três formas de declarar variáveis em JavaScript:
// 1. var: Declarações globais ou de escopo funcional (uso desencorajado).
// 2. let: Escopo de bloco. Ideal para valores que podem mudar.
// 3. const: Escopo de bloco. Ideal para valores constantes que não mudam.

// Exemplos de declaração:
var minhaVariavel = "Olá, mundo!" // Declaração com var

console.log(minhaVariavel) // Saída

const nome = "Italo"; // Constante (não pode ser reatribuida)
let idade = 31;       // Pode ser alterada posteriormente
var ativo = true;     // false

// === Tipos de Dados ===
// JavaScript é dinamicamente tipado. O tipo é atribuído com base no valor.
// Principais tipos de dados:
console.log(typeof nome); // string 
console.log(typeof idade); // number
console.log(typeof ativo); // boolean

// Outros tipos:
var meuObjeto = {}; // Objeto vazio
var meuArray = []; // Array vazio
var meuundefined = undefined; // undefined

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuObmeuundefinedjeto);

// === Operadores Aritmeticos ===
// Operadores aritméticos são usados para realizar cálculos matemáticos.

let x = 10;
const y = 5;

console.log(typeof y);
console.log(x, y);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// === Operadores de Comparação ===

console.log(x == y); // Igual
console.log(x != y); // Diferente

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);

// === Operadores Lógicos ===
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5); // true
console.log(10 > 5 && 20 < 5); // false

console.log(10 > 5 || 20 > 5); // true
console.log(10 > 5 || 20 < 5); // true
console.log(10 < 5 || 20 < 5); // || só irá retornar falso se as duas primicias forem falsas.

// === Conversão de Tipos  
const meuNumero2 = "123";

console.log(meuNumero2);
console.log(typeof meuNumero2);

const meuNumeroConvetido = Number(meuNumero2); // Number irá converter o tipo
console.log(typeof meuNumeroConvetido);

// === Estrutura de condição - if, else, else if ===

const idade2 = 20

if (idade2 > 18) {
    console.log(`Você é maior de ${idade2} anos...`);
} else {
    console.log("Você é menor de idade!");
}

// === Switch ===
// O `switch` é usado para tomar decisões com base no valor de uma variável.
// Ele compara o valor com diferentes casos usando `===` (comparação estrita).

const fruta = "Banana"

switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta!")
        break;
    case "Maça":
        console.log("Maçã é a fruta!")
        break;
};












// === Boas Práticas ===
// 1. Use `let` e `const` em vez de `var`.
// 2. Nomeie variáveis de forma descritiva e consistente.
// 3. Evite misturar tipos de dados desnecessariamente.