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

console.log(link.getAnimations("href"));