function consultaNota () {
    const nota = parseInt(prompt("Digite a sua pontuação que obteve na sua prova: "));
    
    if (isNaN(nota)) {
        alert("Por favor, digite um número valido.")
        return;
    }
    
    if (nota >= 90) {
        alert("Excelente!");
        } else if (nota >= 70 && nota <= 89) {
        alert("Bom!");
        } else if (nota >= 50 && nota <= 69) {
        alert("Regular!");
        } else if (nota < 50 && nota >= 0) {
        alert("Insuficiente!");
        } else {
        alert("Nota inválida. A nota deve ser um valor entre 0 e 100.");
    }
}
    
consultaNota();