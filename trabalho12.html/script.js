let estatisiicas = [];

function cadastro() {
    const produto = document.getElementById("produto").value.trim();
    const cat = document.getElementById("cat").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = Number(document.getElementById("quantidade").value);

    const demo = document.getElementById("demo");

    const aparecer = document.getElementById("close");

    if (produto === "" || preco <= 0 || quantidade < 0) {
        demo.className = "erro"
        demo.textContent = "Preencha todos os campos corretamente!"
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
    }

    let novoProduto = {
        nome: produto,
        categoria: cat,
        valor: preco,
        quantia: quantidade
    };

    estatisiicas.push(novoProduto);

    demo.className = "sucesso";
    demo.textContent = "Produto cadastrado com sucesso!";

    if (estatisiicas.length >= 1) {
        aparecer.style.display = "block";
    } else {
        exclude.style.display = "none";
    }

    setTimeout(function() {
        demo.textContent = ""; 
    }, 2000);

    document.getElementById("preco").value = "";
    document.getElementById("produto").value = "";

    armazenamento()
}

function armazenamento() {
    const tableBody = document.getElementById("tableBody");

    const totalProduto = document.getElementById("totalProduto");
    const totalUnidade = document.getElementById("totalUnidade");
    const totalEstoque = document.getElementById("totalEstoque");

    tableBody.textContent = "";

    for (let i = 0; i <estatisiicas.length; i++) {
        let p = estatisiicas[i]; //atalho para a array estatísticas

        let linha = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdCategoria = document.createElement("td");
        let tdPreco = document.createElement("td");
        let tdQntE = document.createElement("td");
        let tdTotal = document.getElementById("td");

        tdNome.textContent = p.nome;
        tdCategoria.textContent = p.categoria;
        tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
        tdQtdE.textContent = p.quantia;


        let valorTotal = p.valor * p.quantia;
        tdTotal =`R$ ${p.valorTotal.toFixed(2)}`






    }









}