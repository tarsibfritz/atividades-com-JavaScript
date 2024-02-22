var peso = parseFloat(prompt("Informe o peso: "));
var altura = parseFloat(prompt("Informe a altura: "));

if (peso !== 0 && altura !== 0) {
  var IMC = peso / altura ** 2;

  if (IMC > 0 && IMC < 18.5) {
    console.log("IMC = " + IMC.toFixed(2) + "kg/m2. Abaixo do Peso.");
  }

  if (IMC >= 18.5 && IMC < 24.9) {
    console.log("IMC = " + IMC.toFixed(2) + "kg/m2. Peso Ideal.");
  }

  if (IMC >= 25 && IMC < 29.9) {
    console.log("IMC = " + IMC.toFixed(2) + "kg/m2. Excesso de Peso.");
  }

  if (IMC >= 30) {
    console.log("IMC = " + IMC.toFixed(2) + "kg/m2. Obesidade.");
  }
} else {
  console.log("Valor inválido. Tente novamente.");
}
