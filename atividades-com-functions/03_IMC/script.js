function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso Ideal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Excesso de Peso";
    } else {
        return "Obesidade";
    }
}

let peso = parseFloat(prompt("Informe o peso (em quilogramas):"));
let altura = parseFloat(prompt("Informe a altura (em metros):"));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Valores inválidos. Por favor, insira valores válidos maiores que zero.");
} else {
    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    console.log(`O IMC calculado é: ${imc.toFixed(2)} kg/m².`);
    console.log(`Classificação do IMC: ${classificacao}`);
}