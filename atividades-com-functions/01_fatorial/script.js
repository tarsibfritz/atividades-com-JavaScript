function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let valorInicial = parseInt(prompt("Informe um valor: "));

if (valorInicial <= 0 || isNaN(valorInicial)) {
    console.log("Valor inválido. Por favor, informe outro valor.");
} else {
    let resultado = `${valorInicial}! = `;
    for (let i = valorInicial; i >= 1; i--) {
        resultado += i;
        if (i !== 1) {
            resultado += ' x ';
        } else {
            resultado += ` = ${calcularFatorial(valorInicial)}`;
        }
    }
    console.log(resultado);
}