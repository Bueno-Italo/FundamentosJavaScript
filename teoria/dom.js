// === DOM - Document Object Model ===

// Selecionar elementos
const elementoPorId = document.getElementById("meuId");

console.log(elementoPorId);

const elementoPorId2 = document.querySelector("#meuId");

console.log(elementoPorId2);

// Manipular conteudo de texto

const element = document.querySelector("#meuId");

console.log(element.textContent);

setTimeout(() => {
    element.textContent = "Mudei o texto teste";
}, 1000);


// Trabalhando com atributos
const link = document.querySelector("a");

console.log(link);

// Trocando o atributo pelo DOM
link.setAttribute("href", "https://horadecodar.com.br/");

console.log(link.getAttribute("href"));

// Manipulação de classes do CSS

const elemento = document.querySelector("#meuId");

element.classList.add("novaClasse");

// Manipular o CSS
const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";

// Navegação entre nós
const elemento4 = document.querySelector("#meuInput");

const pai = elemento4.parentNode; // retornar o pai do elemeto

console.log(pai);

// Obter o primeiro filho
const primeiroFilho = pai.firstChild;

console.log(primeiroFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div");

console.log(novoElemento);

novoElemento.textContent = "Minha div de JS";

console.log(novoElemento);

document.body.appendChild(novoElemento);