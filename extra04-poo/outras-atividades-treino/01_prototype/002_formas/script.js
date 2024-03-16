// Função Forma
function Forma(cor){
    this.cor = cor;
}

// Prototype
Forma.prototype.apresentacao = function() {
    return `${this.cor}`
}

// Instâncias
let quadrado = new Forma("roxo")
let circulo = new Forma("azul")

// Exibição
console.log(`Um quadrado ${quadrado.cor} e um circulo ${circulo.cor}.`)