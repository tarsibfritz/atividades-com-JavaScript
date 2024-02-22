let soma = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0 && i % 3 === 0) {
    soma += i;
  }
}

console.log(
  "A soma dos números ímpares múltiplos de três de 1 até 100 é: " + soma
);
