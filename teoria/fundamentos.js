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
        console.log("Banana é a fruta!");
        break;
    case "Maça":
        console.log("Maçã é a fruta!");
        break;
    default:
        console.log("Fruta não encontrada!");
};

// Exemplo 2: 
const diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Hoje é Domingo!");
        break; // O `break` evita que os outros casos sejam executados.
    case 2:
        console.log("Hoje é Segunda-feira!");
        break;
    case 3:
        console.log("Hoje é Terça-feira!");
        break;
    case 4:
        console.log("Hoje é Quarta-feira!");
        break;
    case 5:
        console.log("Hoje é Quinta-feira!");
        break;
    case 6:
        console.log("Hoje é Sexta-feira!");
        break;
    case 7:
        console.log("Hoje é Sábado!");
        break;
    default:
        // O `default` é executado se nenhum caso corresponder.
        console.log("Valor inválido para dia da semana.");
};

const usuario = "editor";

switch (usuario) {
    case "admin":
        console.log("Bem-vindo, administrador!");
        break;
    case "editor":
        console.log("Bem-vindo, editor!");
        break;
    default:
        console.log("Bem-vindo, visitante!");
}

// === Estruturas de Repetição ===
// Usadas para executar blocos de códigos repetidamente com base em uma condição.

// === For ===
// O `for` é usado quando sabemos exatamente quantas vezes o código deve ser repetido.
// Estrutura: inicialização; condição; incremento/decremento.
for(let i = 0; i < 5; i++) {
    console.log(`O valor de i é: ${i}`);
}

// === While ===
// O `while` é usado quando a repetição depende de uma condição que pode variar dinamicamente.
// Atenção: Certifique-se de que a condição será false em algum momento para evitar loops infinitos.

let v = 0;

while(v < 5) {
    console.log(`O valor de v é: ${v}`);
    v++;
}

let a = 0;
while (true) {
    console.log(a);
    a++;
    if (a > 10) break; // Condição de parada
}

// === Do-While ===
// O `do-while` é semelhante ao `while`, mas sempre executa o bloco pelo menos uma vez,
// mesmo que a condição seja inicialmente falsa.
let w = 0;

do {
    console.log(`O valor de w é : ${w}`);
    w++;
} while(w < 5);


// === Funções ===
// As funções são blocos de código reutilizáveis. Elas podem ser nomeadas ou anônimas.

function cumprimentar(nome) {
    console.log(`Olá, ${nome}`); // Uso do template literals
}

// Invocação = nome()
cumprimentar("Italo");

// Funções sem parametros 
function mostrarMensgem () {
    console.log("Bem vindo ao curso de JavaScript")
}

mostrarMensgem();

// Função com múltiplos parâmetros
function soma(a, b) {
    return a + b;
}

console.log(soma(10,20));


// === Arrow Function === 
// Arrow Functions oferecem uma sintaxe mais curta para escrever funções.
// Elas são úteis para funções curtas e callbacks, mas têm limitações em relação ao `this`.

// Sintaxe básica
const soma2 = (a, b) => a + b; // Equivalente a: function somar(a, b) { return a + b; }

console.log(10 + 5);

// Exemplo 2:
const testeArrow = () => console.log("Isso também é uma função!");

testeArrow();

// Exemplo 3:
// Funções com varias linhas precisam de chaves e palavra-chave `return`
const calcularAreaRetangulo = (largura, altura) => {
    const area = largura * altura;
    return area;
};

console.log(calcularAreaRetangulo(5, 10));

//1:03 H
// === Boas Práticas ===
// 1. Use `let` e `const` em vez de `var`.
// 2. Nomeie variáveis de forma descritiva e consistente.
// 3. Evite misturar tipos de dados desnecessariamente.