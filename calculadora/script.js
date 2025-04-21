// Seleção Elementos
const display = document.querySelector("#displayInput");
const botaoigual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelector(".operador");

// Variaveis globais
let operacaoAtual = ""; 
let operador = null; 
let valorAnterior = ""; 
let calculando = false;

function atualizaDisplay() {
    display.value = operacaoAtual;
}

function insereNumero(evento) {
    if(calculando) {
        operacaoAtual = evento.target.textContent;
        calculando = false;
    } else {
        operacaoAtual += evento.target.textContent;
    }

    atualizaDisplay();
}

// Eventos
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));