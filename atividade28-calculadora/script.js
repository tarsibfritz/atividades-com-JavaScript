var respostaUsuario = parseInt(
  prompt(
    "Escolha a operação que desaja realizar: \n1. Soma. \n2. Subtração. \n3. Multiplicação. \n4. Divisão."
  )
);

var valor1 = parseFloat(prompt("Informe um número: "));
var valor2 = parseFloat(prompt("Informe outro número: "));

switch (respostaUsuario) {
  case 1:
    var soma = valor1 + valor2;
    console.log(valor1 + " + " + valor2 + " = " + soma);
    break;
  case 2:
    var subtracao = valor1 - valor2;
    console.log(valor1 + " - " + valor2 + " = " + subtracao);
    break;
  case 3:
    var multiplicacao = valor1 * valor2;
    console.log(valor1 + " x " + valor2 + " = " + multiplicacao);
    break;
  case 4:
    var divisao = valor1 / valor2;
    console.log(valor1 + " / " + valor2 + " = " + divisao);
    break;
  default:
    console.log("Número inválido. Tente novamente.");
}
