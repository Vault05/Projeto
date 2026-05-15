let estatisiicas = [];

function Produto(nome, categoria, valor, quantia) {
    this.nome = nome;
    this.categoria = categoria;
    this.valor = valor;
    this.quantia = quantia;
}

function armazenamento() {
    let start = 0;
    let end = estatisiicas.length - 1;
    let meio = estatisiicas.length / 2;
    const test = document.getElementById("test");

    while (start <= end) {
        if (meio = Math.floor((start - end) / 2)) {
            if (meio === pesquisaInput){
                test.textContent = "Achou!";
                return;
            }
            else if(meio < pesquisarInput) {
                end = meio;
            }
            else  {
                inicio = meio;
            }

        }
    }
}