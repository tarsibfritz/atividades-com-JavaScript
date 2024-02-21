let salarioAtual =parseFloat(prompt("Informe o salário atual do funcionário: "));

let valorAumento = (salarioAtual / 100) * 27.50;
let salarioNovo = salarioAtual + valorAumento;

console.log("O novo salário com 27,50 de aumento é de R$" + salarioNovo + ".");