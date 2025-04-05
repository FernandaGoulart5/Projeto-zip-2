// Dados de exemplo (crie uma lista completa no seu projeto real)
const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Guarulhos","Osasco", "Santos"],
    RS: ["Porto Alegre", "Pelotas", "Santa Maria", "Rio Grande", "Bento Gonçalves"],
    RJ: ["Rio de Janeiro","Angra dos Reis", "Niterói","Cabo Frio", "Petrópolis"],
    BA: ["Salvador", "Feira de Santana", "Juazeiro", "Camaçari"],
    DF: ["Belo Horizonte", "Betim", "Ipatinga", "Uberlândia"],
    MG: ["Belo Horizonte","Betim","Ipatinga", "Uberlândia", "Ouro Preto"],
};

function carregarCidades() {
    const estadoSelect = document.getElementById("estado");
    const cidadeSelect = document.getElementById("cidade");
    
    const estado = estadoSelect.value;
    
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
    cidadeSelect.disabled = !estado;

    if (estado) {
        cidadesPorEstado[estado].forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
}

function buscarTrancistas() {
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    
    if (!estado || !cidade) {
        alert("Selecione um estado e uma cidade!");
        return;
    }
    
    // Redireciona para a página de resultados (ou faz uma busca via API)
    window.location.href = `/buscar?estado=${estado}&cidade=${encodeURIComponent(cidade)}`;
}