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


// Manipulação de strings
const frase = "        Olá, Mundo!   ";
console.log(frase);

// Utilizando o trim para remover os espaços da string
const removeSpaço = frase.trim().split(" ");
console.log(removeSpaço)

// Callback => Função
function cumprimentar(nome, Callback) {
    console.log("Olá, " + nome);
    Callback();
}

function mostrarSaudacao() {
    console.log("como voce está?");
}

cumprimentar("italo", mostrarSaudacao);

// Settimeout => depois de um tempo execulta algoo, uma vez;
function mostrarMensagem() {
    console.log("Essa mensgem irá aparecer após 3 segundos.");
}

setTimeout(mostrarMensagem, 3000);

// JSON (JavaScript Object Notation)
// É um formato leve de intercambio de dados utilizados para comunicação entre sistemas, especialmente em APIs;
// Baseado na notação de objetos do JavaScript mas pode ser utilizado em outras linguagens.
// Estruturas: composto por pares de chave-valor e pode conter Objeto({}), Arrays([]) e Valores Primitivos como strings, numeros, booleanos e null.

/* {
    "nome": "Italo",
    "idade": 25,
    "habilidades": ["JavaScript", "HTML", "CSS"],
    "ativo": true,
    "endereco": {
      "cidade": "São Paulo",
      "estado": "SP"
    }
}
 */
const objeto = {nome: "Italo", idade: 30};
const jsonString = JSON.stringify(objeto);

console.log(objeto);
console.log(typeof objeto);