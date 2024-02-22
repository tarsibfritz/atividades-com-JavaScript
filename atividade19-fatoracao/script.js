let numero = parseInt(prompt("Informe um número: "));

console.log(numero);

if (!isNaN(numero)) {
  let resultado = 1;
  let sequencia = numero + "! = ";

  for (let i = numero; i >= 1; i--) {
    resultado *= i;
    if (i === numero) {
      sequencia += i;
    } else {
      sequencia += " x " + i;
    }
  }

  sequencia += " = " + resultado;

  console.log(sequencia);
} else {
  console.log("Por favor, insira um número válido.");
}
