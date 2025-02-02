 function consultaNota () {
    const nota = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nota)) {
        alert("Por favor, digite um número valido.")
        return;
    }
    
    if (nota >= 90) {
            resultado.innerText = "Excelente!";
            resultado.style.color = "green";
        } else if (nota >= 70 && nota <= 89) {
            resultado.innerText = "Bom!";
            resultado.style.color = "green";
        } else if (nota >= 50 && nota <= 69) {
            resultado.innerText = "Regular!";
            resultado.style.color = "orange";
        } else if (nota < 50 && nota >= 0) {
            resultado.innerText = "Insuficiente!";
            resultado.style.color = "red";
        } else {
            alert("Nota inválida. A nota deve ser um valor entre 0 e 100.");
    }
}
    