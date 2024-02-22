let valorA = parseFloat(prompt("Informe o valor A: "));
let valorB = parseFloat(prompt("Informe o valor B: "));
let valorC = parseFloat(prompt("Informe o valor C: "));

console.log(
  "Valor A: " + valorA + "\nValor B: " + valorB + "\nValor C: " + valorC
);

const crescente = [valorA, valorB, valorC].sort((x, y) => x - y);
const decrescente = [valorA, valorB, valorC].sort((x, y) => y - x);

console.log("Ordem crescente: " + crescente);
console.log("Ordem decrescente: " + decrescente);
