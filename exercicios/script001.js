function calcularDobro () {

    const numeroString = document.getElementById("numero").value;
    
    const numeroConvertido = parseInt(numeroString, 10);
    
    // Verifica se o valor é numero valido
    if (isNaN(numeroConvertido)) {
    alert("Por favor, digite um numero válido" );
    return;
    }
    
    const resultado = numeroConvertido * 2;
    
    document.getElementById("resultado").textContent = `o dobro do numero inserido é: ${resultado} `;
    
};