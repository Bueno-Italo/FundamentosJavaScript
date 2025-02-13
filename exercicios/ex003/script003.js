/*
=== Operações Aritméticas ===
Exercício: Calculadora Básica
Crie um programa que:

- Pergunte ao usuário dois números.
- Realize as operações de soma, subtração, multiplicação e divisão entre esses números.
- Exiba os resultados no console e em alertas.
*/

// Cenário 1: Exibição dos resultados no console
const valor1 = parseInt(prompt("Digite um número: "));
const valor2 = parseInt(prompt("Digite outro número: "));

// Operações aritméticas básicas
const soma = valor1 + valor2;
const subtracao = valor1 - valor2;
const multiplicacao = valor1 * valor2;
const divisao = valor2 !== 0 ? (valor1 / valor2).toFixed(2) : "Divisão por zero não é permitida";

// Resultados no console
console.log(`A soma dos dois valores é: ${soma}`);
console.log(`A subtração dos dois valores é: ${subtracao}`);
console.log(`A multiplicação dos dois valores é: ${multiplicacao}`);
console.log(`A divisão dos dois valores é: ${divisao}`);

/*
Explicação do Cenário 1:
- parseInt: Converte a entrada do usuário para um número inteiro.
- toFixed(2): Formata o resultado da divisão para 2 casas decimais (quando aplicável).
- Validação da divisão por zero: Evita erros ao realizar uma operação inválida.
*/

// Cenário 2: Exibição dos resultados usando alert
function calcularValor() {
    const v1 = Number(prompt("Digite um número para ser calculado: "));
    const v2 = Number(prompt("Digite outro número: "));

    const somar = v1 + v2;
    const subtrair = v1 - v2;
    const multiplicar = v1 * v2;
    const divisao = v2 !== 0 ? (v1 / v2).toFixed(2) : "Divisão por zero não é permitida";

    alert(`A soma dos valores é: ${somar}`);
    alert(`A subtração dos valores é: ${subtrair}`);
    alert(`A multiplicação dos valores é: ${multiplicar}`);
    alert(`A divisão dos valores é: ${divisao}`);
}

calcularValor();

/*
Explicação do Cenário 2:
- Number: Converte a entrada do usuário para número, incluindo decimais se forem inseridos.
- Validação de entrada: A lógica da divisão verifica se o divisor é diferente de zero para evitar erros.
- Alert: Mostra os resultados diretamente na tela para o usuário.
*/
