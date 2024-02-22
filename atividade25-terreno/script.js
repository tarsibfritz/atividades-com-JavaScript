var largura = parseInt(prompt("Informe a largura do terreno: "));
var comprimento = parseInt(prompt("Informe o comprimento do terreno: "));

var area = largura * comprimento;

if (area < 100) {
  console.log(
    "O terreno tem área de " +
      area +
      "m2. E é classificado como Terreno Popular."
  );
}
if (area >= 100 && area <= 500) {
  console.log(
    "O terreno tem área de " +
      area +
      "m2. E é classificado como Terreno Master."
  );
}
if (area > 500) {
  console.log(
    "O terreno tem área de " + area + "m2. E é classificado como Terreno Vip."
  );
}
