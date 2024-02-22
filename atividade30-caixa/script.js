function calcularNotas(valor) {
  if (valor % 1 !== 0) {
    console.log(
      "Valor inválido. O valor solicitado para o saque deve ser um número inteiro."
    );
    return;
  }
  const notas = [100, 50, 20, 10, 5, 2, 1];

  let distribuicaoNotas = {};

  for (let nota of notas) {
    if (valor >= nota) {
      let quantidade = Math.floor(valor / nota);
      distribuicaoNotas[nota] = quantidade;
      valor -= quantidade * nota;
    }
  }

  for (let nota in distribuicaoNotas) {
    console.log("Nota de R$" + nota + ": " + distribuicaoNotas[nota]);
  }
}
const valorSaque = parseInt(prompt("Informe o valor do saque: "));
calcularNotas(valorSaque);
