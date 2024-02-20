let duracaoHoras = parseInt(prompt("Informe o número em horas: "));
let duracaoMinutos = parseInt(prompt("Informe o número de minutos: "));
let duracaoSegundos = parseInt(prompt("Informe o número de segundos: "));

let totalEmSegundos = duracaoHoras * 3600 + duracaoMinutos * 60 + duracaoSegundos;

console.log("O tempo de duração da atividade é de " + totalEmSegundos + " segundos.");
