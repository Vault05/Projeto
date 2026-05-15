let estatisiicas = [];

function Produto(nome, categoria, valor, quantia) {
    this.nome = nome;
    this.categoria = categoria;
    this.valor = valor;
    this.quantia = quantia;
}

function cadastro() {
    const produto = document.getElementById("produto").value.trim();
    const cat = document.getElementById("cat").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = Number(document.getElementById("quantidade").value);

    const demo = document.getElementById("demo");

    const aparecer = document.getElementById("close");

    if (produto == "" || preco <= 0 || quantidade <= 0 || !preco) {
        demo.className = "erro"
        demo.textContent = "Preencha todos os campos corretamente!"
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
        return;
    }

    let repetido = false;

    for (let i = 0; i < estatisiicas.length; i++) {
        if (estatisiicas[i].nome.toLowerCase() === produto) {
            repetido = true;
            break;
        }
    }
    if (repetido) {
        demo.className = "erro";
        demo.textContent = "Este produto já foi cadastrado!";
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
        return;
    }
    
    let novoProduto = new Produto(produto, cat, preco, quantidade);

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

    document.getElementById("produto").value = "";
    document.getElementById("cat").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";

    armazenamento()
}

function armazenamento() {
    const tableBody = document.getElementById("tableBody");

    const totalProduto = document.getElementById("totalProduto");
    const totalUnidade = document.getElementById("totalUnidade");
    const totalEstoque = document.getElementById("totalEstoque");

    tableBody.textContent = "";

    let somaUnidades = 0
    let precoTotal = 0;


    for (let i = 0; i <estatisiicas.length; i++) {
        let p = estatisiicas[i]; //atalho para a array estatísticas
        
        somaUnidades += p.quantia;
        precoTotal += (p.valor * p.quantia);

        let linha = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdCategoria = document.createElement("td");
        let tdPreco = document.createElement("td");
        let tdQtdE = document.createElement("td");
        let tdTotal = document.createElement("td");

        tdNome.textContent = p.nome;
        tdCategoria.textContent = p.categoria;
        tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
        tdQtdE.textContent = p.quantia;

        let valorTotal = p.valor * p.quantia;
        tdTotal.textContent =`R$ ${valorTotal.toFixed(2)}`;

        linha.appendChild(tdNome);
        linha.appendChild(tdCategoria);
        linha.appendChild(tdPreco);
        linha.appendChild(tdQtdE);
        linha.appendChild(tdTotal);
        tableBody.appendChild(linha);
    }

    totalProduto.textContent = `Quantidade de produtos cadastrados: ${estatisiicas.length}`;
    totalUnidade.textContent = `Total de unidades em estoque: ${somaUnidades};`;
    totalEstoque.textContent = `Total de preço do estoque R$: ${precoTotal.toFixed(2)}`;
}

function pesquisar() {
    const pesquisaInput = document.getElementById("pesquisaInput").value.trim().toLowerCase();
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");

    resultadoPesquisa.textContent = ""

    for (let i = 0; i < estatisiicas.length; i++) {
        let p = estatisiicas[i];
        if (p.nome.trim().toLowerCase().includes(pesquisaInput)) {

            let linha = document.createElement("tr");
            let tdNome = document.createElement("td");
            let tdCategoria = document.createElement("td");
            let tdPreco = document.createElement("td");
            let tdQtdE = document.createElement("td");
            let tdTotal = document.createElement("td");
    
            tdNome.textContent = p.nome;
            tdCategoria.textContent = p.categoria;
            tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
            tdQtdE.textContent = p.quantia;
    
            let valorTotal = p.valor * p.quantia;
            tdTotal.textContent =`R$ ${valorTotal.toFixed(2)}`;
    
            linha.appendChild(tdNome);
            linha.appendChild(tdCategoria);
            linha.appendChild(tdPreco);
            linha.appendChild(tdQtdE);
            linha.appendChild(tdTotal);
            resultadoPesquisa.appendChild(linha);

            document.getElementById("pesquisaInput").value = "";
        }
    }
}

function baixo() {
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");

    resultadoPesquisa.textContent = "";

    let encontrou = false;

    let valorBaixoItem = 0;

    for (let i = 0; i < estatisiicas.length; i++) {
        let p = estatisiicas[i];

        if(p.quantia <= 5) {
        
            encontrou = true;

            let linha = document.createElement("tr");
            let tdNome = document.createElement("td");
            let tdCategoria = document.createElement("td");
            let tdPreco = document.createElement("td");
            let tdQtdE = document.createElement("td");
            let tdTotal = document.createElement("td");

            tdNome.textContent = p.nome;
            tdCategoria.textContent = p.categoria;
            tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
            tdQtdE.textContent = p.quantia;

            let valorBaixoItem = p.valor * p.quantia;
            tdTotal.textContent = `R$ ${valorBaixoItem.toFixed(2)}`;

            linha.appendChild(tdNome);
            linha.appendChild(tdCategoria);
            linha.appendChild(tdPreco);
            linha.appendChild(tdQtdE);
            linha.appendChild(tdTotal);
            resultadoPesquisa.appendChild(linha);
        }
        else if (!encontrou) {
            alert("Não existem produtos com baixo estoque!");
        }
    }
}

function exclude() {
    const close = document.getElementById("close");
    
    estatisiicas.pop();

    if (estatisiicas.length <= 0) {
        close.style.display = "none";
    }

    armazenamento();
}