let totalEmSegundos = parseInt(prompt("Informe a duração total em segundos: "));

let duracaoHoras = totalEmSegundos / 3600 | 0;
let segundosRestantes = totalEmSegundos % 3600;
let duracaoMinutos = segundosRestantes / 60 | 0;
let duracaoSegundos = segundosRestantes % 60;

console.log("O tempo de duração da atividade é de " + duracaoHoras + " horas, " + duracaoMinutos + " minutos e " + duracaoSegundos + " segundos.");