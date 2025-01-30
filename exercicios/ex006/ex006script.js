function verificaNumero() {
    // Obtendo o valor do input como número
    const numero = parseInt(document.getElementById("numero").value);
    
    // Referência ao elemento onde será exibido o resultado
    const resultado = document.getElementById("resultado");
    
    if (numero % 2 === 0) {
        resultado.innerText = "O número é Par";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "O número é Ímpar";
        resultado.style.color = "red";
    }
}