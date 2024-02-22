let interacao = 0;

for (let i = 0; i <= 30; i++) {
  interacao = interacao += 1;
  if (interacao == 30) {
    console.log("Interação igual a 30");
    break;
  }

  if (i % 2 !== 0) {
    console.log(i);
  }
}
