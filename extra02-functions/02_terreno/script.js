function calcularArea(largura, comprimento) {
    return largura * comprimento;
}

function classificarTerreno(area) {
    if (area < 100) {
        return "TERRENO POPULAR";
    } else if (area >= 100 && area <= 500) {
        return "TERRENO MASTER";
    } else {
        return "TERRENO VIP";
    }
}

let largura = parseFloat(prompt("Informe a largura do terreno (em metros):"));
let comprimento = parseFloat(prompt("Informe o comprimento do terreno (em metros):"));

if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
    console.log("Valores inválidos. Por favor, insira valores válidos.");
} else {
    let area = calcularArea(largura, comprimento);
    let classificacao = classificarTerreno(area);

    console.log(`A área do terreno é de ${area}m².`);
    console.log(`Classificação do terreno: ${classificacao}`);
}