let idadeEmDias = parseInt(prompt("Informe a sua idade em dias: "));

let diasPorAno = 365;
let diasPorMes = 30;

let anos = idadeEmDias / diasPorAno | 0;
let diasRestantes = idadeEmDias % diasPorAno;
let meses = diasRestantes / diasPorMes | 0;
let dias = diasRestantes % diasPorMes;

console.log("Sua idade é:", anos, "anos,", meses, "meses e", dias, "dias.");
