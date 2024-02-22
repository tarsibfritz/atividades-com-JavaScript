let interacao = 0;

for (let i = 0; i <= 50; i++) {
  interacao = interacao += 1;
  if (interacao == 30) {
    console.log("Interação igual a 30");
    continue;
  }
  if (i % 2 == 0 && i !== 30) {
    console.log(i);
  }
}
