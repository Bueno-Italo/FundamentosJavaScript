function calcularTotal() {
    const produto = document.getElementById("produto").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    
    if (!produto || isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade <= 0) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }
    
    let total = preco * quantidade;
    let totalComDesconto = total;
    
    if (total > 100) {
        totalComDesconto = total * 0.9;
    }
    
    document.getElementById("resultado").innerHTML = `
    <p><strong>Produto:</strong> ${produto}</p>
    <p><strong>Quantidade:</strong> ${quantidade}</p>
    <p><strong>Preço Total:</strong> R$ ${total.toFixed(2)}</p>
    ${total > 100 ? `<p><strong>Total com Desconto:</strong> R$ ${totalComDesconto.toFixed(2)}</p>` : ""}
    `;
}
    