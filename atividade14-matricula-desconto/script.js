var valorAntigoMatricula = parseFloat(prompt("Informe o valor atual da matrícula: "));
var desconto = valorAntigoMatricula * 0.2;
var valorNovoMatricula = valorAntigoMatricula - desconto;

console.log("O valor da matrícula com desconto é igual a: R$" +valorNovoMatricula);