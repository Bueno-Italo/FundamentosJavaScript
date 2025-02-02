function verificarIdade() {
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');

    if (idade >= 18) {
        resultado.textContent = "Voce pode dirigir!";
        resultado.style.color = "green";
        } else if (idade >= 16 && idade < 18) {
        resultado.textContent = "Para a sua idade voce precisa tirar a sua CNH!";
        resultado.style.color = "orange";
        } else {
        resultado.textContent = "Voce não pode dirigir!";
        resultado. style.color = "red";
    }
        
}