let produtos = [];

for (let i = 0; i < 8; i++){
    let nomeProduto = prompt("Informe o nome do produto: ");
    let precoProduto = parseFloat(prompt("Digite o preço do produto: "))

    if (nomeProduto === "" || isNaN(precoProduto) || precoProduto <= 0 || nomeProduto === null || precoProduto === null){
        console.log("Por favor, digite valores válidos.");
        i--;
    }
    else{
        produtos.push({ nome: nomeProduto, preco: precoProduto });
    }
}

let produtoMaiorPreco = produtos[0];
let produtoMenorPreco = produtos[0];

for (let i = 1; i < produtos.length; i++){
    if(produtos[i].preco > produtoMaiorPreco.preco){
        produtoMaiorPreco = produtos[i];
    }
    if(produtos[i].preco < produtoMenorPreco.preco){
        produtoMenorPreco = produtos[i];
    }
}

console.log("Produto com maior preço: ");
console.log("Nome: " + produtoMaiorPreco.nome);
console.log("Preço: R$" + produtoMaiorPreco.preco.toFixed(2));

console.log("\nProduto com menor preço: ");
console.log("Nome: " + produtoMenorPreco.nome);
console.log("Preço: R$" + produtoMenorPreco.preco.toFixed(2));