const base = 20;
const altura = 20;

function areaTriangulo () {
    const area = (base * altura) /2;

    console.log(`A area do triangulo é: ${area}`);
}
areaTriangulo();

// Implementação 02
function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Digite a base do triângulo:"));
    const altura = parseFloat(prompt("Digite a altura do triângulo:"));
    
    if (isNaN(base) || isNaN(altura) || base <=0 || altura <= 0) {
        console.log("Por favor, insita valores numéricos validos e maiores que zero");
        return;
    }

    const area = (base * altura) /2;
    console.log(`A area do triângulo é: ${area}`);
}

calcularAreaTriangulo();