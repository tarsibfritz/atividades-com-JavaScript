var altura = parseFloat(prompt("Informe a altura da pessoa: "));
var sexo = prompt("Informe o sexo da pessoa (F/M):").toLowerCase();
var pessoIdeal = 0;

if (altura !== 0 && (sexo === "m" || sexo === "f")) {
  if (sexo === "m") {
    pesoIdeal = ((altura * 72.7) - 58).toFixed(2);
    console.log("Peso ideal: " + pesoIdeal);
  } else {
    pesoIdeal = ((altura * 62.1) - 44.7).toFixed(2);
    console.log("Peso ideal: " + pesoIdeal);
  }
} else {
  console.log("Valor inválido. Tente novamente.");
}
