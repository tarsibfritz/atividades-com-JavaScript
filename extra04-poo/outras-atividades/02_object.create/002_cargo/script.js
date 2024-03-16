// Objeto 'pessoa' com as propriedades nome e idade
let pessoa = {
    nome: "Hugo",
    idade: 27
}

// Instância
let funcionario = Object.create(pessoa)
funcionario.cargo = "Engenheiro"

// Exibição
console.log(`Meu nome é ${funcionario.nome}, tenho ${funcionario.idade} anos e sou ${funcionario.cargo}.`)