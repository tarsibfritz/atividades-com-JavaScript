let valorBoleto = parseInt(prompt("Informe o valor do boleto: "));
let diasAtraso = parseInt(prompt("Informe a quantidade de dias que o boleto está em atraso: "));

let taxaBoleto = (diasAtraso / 100) * 1.25;
let novoValor = valorBoleto * (1 + taxaBoleto);

console.log("O novo valor do boleto com atraso é: R$" + novoValor + ".");
