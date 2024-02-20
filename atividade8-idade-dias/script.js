var idadeEmAnos = parseInt(prompt("Informe a sua idade em anos: "));
var idadeEmMeses = parseInt(prompt("Informe a sua idade em meses: "));
var idadeEmDias = parseInt(prompt("Informe a sua idade em dias: "));

var idadeTotalEmDias = (idadeEmAnos * 365) + (idadeEmMeses * 30) + idadeEmDias;

console.log("Sua idade expressa em dias é: " + idadeTotalEmDias);