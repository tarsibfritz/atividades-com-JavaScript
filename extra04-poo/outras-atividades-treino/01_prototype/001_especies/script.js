// Função 'Animal' com o parâmetro 'especie'
function Animal(especie){
    this.especie = especie;
}

// Prototype (propriedade de função, usado para compartilhar propriedades e métodos com as instâncias criadas)
Animal.prototype.introducao = function(){
    return `Eu sou um ${this.especie}.`
}

// Instâncias
let cachorro = new Animal("cachorro")
let gato = new Animal("gato")

// Exibição
console.log(cachorro.introducao())
console.log(gato.introducao())