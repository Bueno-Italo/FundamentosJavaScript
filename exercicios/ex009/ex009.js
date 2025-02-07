function calculaImc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("alt").value);
    const resultado = document.getElementById("resultado");

    // Depuração: ver valores no console
    console.log("Peso:", peso, "Altura:", altura);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "<p style='color: red;'>Insira valores válidos para peso e altura!</p>";
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);
    let categoria;

    // Classificação do IMC
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    resultado.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> - ${categoria}</p>`;
}