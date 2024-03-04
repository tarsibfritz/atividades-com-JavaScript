let terreno = [];

terreno[0] = parseFloat(prompt("Digite o comprimento do terreno em metros: "));
terreno[1] = parseFloat(prompt("Digite a largura do terreno em metros: "));

if (isNaN(terreno[0]) || isNaN(terreno[1]) || terreno[0] <= 0 || terreno[1] <= 0){
    console.log("Por favor, digite valores válidos para o terreno.")
}
else{
    terreno[2] = terreno[0] * terreno[1];
    console.log("Dimensões do terreno = " + terreno[0] + "m x " + terreno[1] + "m")
    console.log("Área do terreno = " + terreno[2] + "m2")
}