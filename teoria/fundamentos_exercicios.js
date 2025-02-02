// === Exercicio 1: ===
// Crie um script que imprima "Olá, Mund0!"

console.log("Olá, Mundo!")

// === Exercicio 2: ===
//Dado o valor de uma string "1234", converta-os em um numero e exiba o tipo da constiável no console.

const valorString = "1234";
const valorConvertido = Number(valorString);

console.log(`O tipo da variável convertida é ${typeof valorConvertido}`);

// === exercicio 3: ===
// Dado uma string "JavaScript é incrivel", escreca um codigo que conte quantos caracteres a string possui e quantas palavras existem na frase.

const frase = "JavaScript é incrivel";

console.log(`A quantidade de caracteres na string é: ${frase.length}`);

console.log(`A quantidade de palavras existentes na frase é: ${frase.split(" ").length}`)


// === Exercicio 4: === 
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const meuArray = ["italo", "jessica", "zoe", "maya", "isis"];

for(let i = 0; i < meuArray.length; i++) {

    console.log(meuArray[i]);
}

// === Exercicio 5: ===
// Crie uma função que aceite uma string representando um formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horario para o formato 12 horas (por exemplo, 2:30 PM). Use o objeto Math para auxiliar nessa conversão. Certifique-se de que sua função lida corretamente com o horario da meia-noite e meio-dia;
const agora = new Date();
const horas = agora.getHours();
const minutos = agora.getMinutes();

function mostrarHoraAtual() {

    const hora12 = horas % 12 || 12;
    const periodo = horas >= 12 ? "PM" : "AM";
    
    if(horas < 12){
        console.log("bom dia!");
    } else if (horas < 18) {
        console.log("boa tarde!");
    } else {
        console.log("Boa noite!");
    }

    //console.log(`A hora exata é ${horas}:${minutos}`)
    console.log(`A hora exata é ${hora12}:${minutos.toString().padStart(2, '0')} ${periodo}`);
}

mostrarHoraAtual();