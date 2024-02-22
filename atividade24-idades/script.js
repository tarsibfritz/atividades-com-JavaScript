let somaIdades = 0;
let quantidadeMaisDe20 = 0;
let quantidadeMenosDe10 = 0;
let maiorIdade, menorIdade;

for (let i = 0; i < 10; i++) {
  let idade = parseFloat(prompt("Informe a idade de dez pessoas: "));
  console.log(i + 1 + ". idade: " + idade);
  somaIdades += idade;

  if (idade > 20) {
    quantidadeMaisDe20++;
  }
  if (idade < 10) {
    quantidadeMenosDe10++;
  }
  if (maiorIdade === undefined || idade > maiorIdade) {
    maiorIdade = idade;
  }
  if (menorIdade === undefined || idade < menorIdade) {
    menorIdade = idade;
  }
}

let media = somaIdades / 10;

console.log("\nMédia do grupo: " + media);
console.log("Quantidade de pessoas com mais de 20 anos: " + quantidadeMaisDe20);
console.log(
  "Quantidade de pessoas com menos de 10 anos: " + quantidadeMenosDe10
);
console.log("Maior idade do grupo: " + maiorIdade);
console.log("Menor idade do grupo: " + menorIdade);
