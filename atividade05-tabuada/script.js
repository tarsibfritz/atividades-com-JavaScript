var numero = parseInt(prompt("Informe o número desejado: "));

if (!isNaN(numero)) {
    console.log("Tabuada do " + numero + ":");
    for (var i = 1; i <= 10; i++){
        console.log(numero + " x " + i + " = " + (numero *i));
    }
}

else {
    console.log("Por favor, digite um número válido.")
}