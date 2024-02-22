var precoNormal = parseFloat(prompt("Informe o preço normal do produto: "));
var novoPreco = 0;
var desconto = 0;
var aumento = 0;

var respostaUsuario = parseInt(
  prompt(
    "Escolha uma das condições de pagamento abaixo: \n1. À vista em dinheiro ou cheque, recebe 10% de desconto. \n2. À vista no cartão de crédito, recebe 15% de desconto. \n3. Em duas vezes, preço normal de etiqueta sem juros. \n4. Em duas vezes, preço normal de etiqueta mais juros de 10%."
  )
);
switch (respostaUsuario) {
  case 1:
    desconto = precoNormal * 0.1;
    novoPreco = precoNormal - desconto;
    console.log("Valor a ser pago: R$" + novoPreco);
    break;
  case 2:
    desconto = precoNormal * 0.15;
    novoPreco = precoNormal - desconto;
    console.log("Valor a ser pago: R$" + novoPreco);
    break;
  case 3:
    novoPreco = precoNormal;
    console.log("Valor a ser pago: R$" + novoPreco);
    break;
  case 4:
    aumento = precoNormal * 0.1;
    novoPreco = precoNormal + aumento;
    console.log("Valor a ser pago: R$" + novoPreco);
    break;
  default:
    console.log("Opção inválida.");
    break;
}
