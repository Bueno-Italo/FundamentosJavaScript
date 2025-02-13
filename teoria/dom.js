// === DOM - Document Object Model ===

// Selecionar elementos
// Usando getElementById (retorna um único elemento)
const elementoPorId = document.getElementById("meuId");
console.log(elementoPorId);

// Usando querySelector (mais flexível, suporta seletores CSS)
const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);

// Manipular conteúdo de texto
const element = document.querySelector("#meuId");

console.log("Texto atual:", element.textContent);

// Atualizando o texto do elemento após 1 segundo
setTimeout(() => {
  element.textContent = "Mudei o texto teste";
  console.log("Texto alterado para:", element.textContent);
}, 1000);

// === Trabalhando com atributos ===
const link = document.querySelector("a");
console.log("Atributo href atual:", link.getAttribute("href"));

// Trocando o atributo pelo DOM
link.setAttribute("href", "https://horadecodar.com.br/");
console.log("Novo valor do atributo href:", link.getAttribute("href"));

// === Manipulação de classes do CSS ===
const elemento = document.querySelector("#meuId");

// Adicionando uma nova classe CSS
element.classList.add("novaClasse");
console.log("Classe 'novaClasse' adicionada:", elemento.classList);

// === Manipular o CSS diretamente ===
const elemento3 = document.querySelector("#meuId");
elemento3.style.color = "blue";
console.log("Cor alterada para azul");

// === Navegação entre nós ===
const elemento4 = document.querySelector("#meuInput");

// Retornar o nó pai do elemento
const pai = elemento4.parentNode;
console.log("Elemento pai:", pai);

// Obter o primeiro filho do pai
const primeiroFilho = pai.firstChild;
console.log("Primeiro filho do pai:", primeiroFilho);

// === Manipulação de estrutura do DOM ===
const novoElemento = document.createElement("div");

// Definindo o conteúdo do novo elemento
novoElemento.textContent = "Minha div de JS";
console.log("Novo elemento criado:", novoElemento);

// Inserindo o elemento na estrutura do DOM
document.body.appendChild(novoElemento);
console.log("Elemento adicionado ao body");

// Eventos

// Selecionando o evento especifio click
const botao = document.querySelector("button");

botao.addEventListener("click", function () {
  console.log("botão clicado!");
});

// Mouse
const elemento5 =  document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", function () {
  console.log("O mouse passou aqui");
});

// Formulario
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Validando o form com o preventDefault parando o carremanto da pagina
  event.preventDefault();
  console.log("form enviado");
});