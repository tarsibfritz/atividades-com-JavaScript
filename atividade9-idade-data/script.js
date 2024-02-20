var idadeEmDias = parseInt(prompt("Informe a sua idade em dias: "));

var diasPorAno = 365;
var diasPorMes = 30;

var anos = idadeEmDias / diasPorAno | 0;
var diasRestantes = idadeEmDias % diasPorAno;
var meses = diasRestantes / diasPorMes | 0;
var dias = diasRestantes % diasPorMes;

console.log("Sua idade é:", anos, "anos,", meses, "meses e", dias, "dias.");
