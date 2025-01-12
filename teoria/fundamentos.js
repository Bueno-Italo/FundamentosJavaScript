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

// === Operadores aritmeticos ===
// Operadores aritméticos são usados para realizar cálculos matemáticos.

let x = 10;
const y = 5;

console.log(typeof y);
console.log(x, y);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// === Operadores de comparação ===

console.log(x == y); // Igual
console.log(x != y); // Diferente

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);

// === Operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5);










// === Boas Práticas ===
// 1. Use `let` e `const` em vez de `var`.
// 2. Nomeie variáveis de forma descritiva e consistente.
// 3. Evite misturar tipos de dados desnecessariamente.