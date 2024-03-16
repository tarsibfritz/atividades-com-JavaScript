// Classe CADASTRO
class Cadastro {
    // Método constutor do Cadastro
    constructor(nomePet, sexo, raca, cor, idade, peso, altura, nomeDoDono, telefoneDoDono){
        this.nomeDoDono = nomeDoDono;
        this.telefoneDoDono = telefoneDoDono;
        this.nomePet = nomePet;
        this.sexo = sexo;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    exibirInformacoes(){
        console.log("Nome do dono(a): " + this.nomeDoDono);
        console.log("Telefone do dono(a): " + this.telefoneDoDono);
        console.log("Nome: " + this.nomePet);
        console.log("Sexo: " + this.sexo);
        console.log("Raça: " + this.raca);
        console.log("Cor: " + this.cor);
        console.log("Idade: " + this.idade);
        console.log("Peso: " + this.peso);
        console.log("Altura: " + this.altura);
    }
}

// Expressão para validação
const regexTelefone = /\(\d{2,3}\)\d{4,5}|\s\d{4,5}-\d{4}/
const regexPeso = /^\d+\.?\d*$/     // d+ = um ou mais dígitos numéricos e d* = zero ou mais dígitos numéricos
const regexAltura = /^\d+\.?\d*$/
const regexSexo = /^[fm]$/i

// Função para ler os dados
function lerDados(tipoPet){
    // Variáveis para o dono
    let nomeDoDono, telefoneDoDono

    // Variáveis para os pets
    let nomePet, sexo, raca, cor, idade, peso, altura

    // Ler informações do dono
    alert("Informe os dados do dono do " + tipoPet)
    do{
        nomeDoDono = prompt("Nome do dono(a): ");
        if (!nomeDoDono) console.log("Nome inválido. Tente novamente.");
    } while(!nomeDoDono)
    do{
        telefoneDoDono = prompt("Telefone: ");
        if (!telefoneDoDono || !regexTelefone.test(telefoneDoDono)) console.log("Nome inválido. Tente novamente.");
    } while(!telefoneDoDono || !regexTelefone.test(telefoneDoDono))

    // Ler informações dos pets
    alert("Informe os dados do " + tipoPet)
    do{
        nomePet = prompt("Nome: ");
        if (!nomePet) console.log("Nome inválido. Tente novamente.");
    } while(!nomePet)
    do{
        sexo = prompt("Sexo: " + "\nf - fêmea" + "\nm - macho");
        if (!sexo) console.log("Sexo inválido. Tente novamente.");
    } while(!sexo || !regexSexo.test(sexo))
    do{
        raca = prompt("Raça: ");
        if (!raca) console.log("Raça inválida. Tente novamente.");
    } while(!raca)
    do{
        cor = prompt("Cor: ");
        if (!cor) console.log("Cor inválida. Tente novamente.");
    } while(!cor)
    do{
        idade = prompt("Idade: ");
        if (!idade) console.log("Idade inválida. Tente novamente.");
    } while(!idade)
    do{
        peso = prompt("Peso: ");
        if (!peso) console.log("Peso inválido. Tente novamente.");
    } while(!peso || !regexPeso.test(peso))
    do{
        altura = prompt("Altura: ");
        if (!altura) console.log("Altura inválida. Tente novamente")
    } while(!altura || !regexAltura.test(altura))

    console.clear()

    // Criar novo objeto com os dados fornecidos:
    return new Cadastro(nomePet, sexo, raca, cor, idade, peso, altura, nomeDoDono, telefoneDoDono)
}

// Função principal
function main(){
    const pets = []; // Array para armazenar os objetos dos pets

     // Ler dados do cachorro
    const cachorro = lerDados("cachorro");
    pets.push(cachorro); // Adiciona o objeto no array

    // Ler dados do gato
    const gato = lerDados("gato");
    pets.push(gato); // Adiciona o objeto no array

    // Exibir informações dos pets
    console.log("\nInformações do cachorro:");
    pets[0].exibirInformacoes(); // Exibe as informações do cachorro
    console.log("\nInformações do gato:");
    pets[1].exibirInformacoes(); // Exibe as informações do gato
}

// Chamada da função principal
main();