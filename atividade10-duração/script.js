var duracaoHoras = parseInt(prompt("Informe o número em horas: "));
var duracaoMinutos = parseInt(prompt("Informe o número de minutos: "));
var duracaoSegundos = parseInt(prompt("Informe o número de segundos: "));

var tempoEmSegundos = duracaoHoras * 3600 + duracaoMinutos * 60 + duracaoSegundos;

console.log("O tempo de duração da atividade é de " + tempoEmSegundos + " segundos.");
