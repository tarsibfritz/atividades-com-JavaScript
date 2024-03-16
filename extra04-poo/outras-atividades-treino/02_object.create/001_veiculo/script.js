// Objeto 'veiculo' com as propriedades marca e modelo
let veiculo = {
    marca: "Toyota",
    modelo: ""
}

// Novo objeto criado com Object.create
let carro = Object.create(veiculo)
carro.modelo = "Corola"   // definindo valor para a propriedade marca no objeto 'carro'

// Método
carro.saudacao = function(){
    return `Informações sobre o carro:` + `\nMarca: ${this.marca}` + `\nModelo: ${this.modelo}`
}

// Exibição
console.log(carro.saudacao())

// TODO: crie um objeto chamado veículo com as propriedades: marca e modelo
// TODO: crie um novo objeto chamado carro usando Objec.create(veiculo) com a propriedade modelo definida como "Corola"
// TODO: defina um método saudacao() que retorna uma mensagem de saudação