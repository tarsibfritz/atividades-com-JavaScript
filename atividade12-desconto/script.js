let precoProduto = prompt("Informe o preço normal do produto: ");

let valorDesconto = (precoProduto / 100) * 15;
let precoPromocional = precoProduto - valorDesconto;

console.log("O preço promocional do produto com 15% de desconto é de R$" + precoPromocional + ".");