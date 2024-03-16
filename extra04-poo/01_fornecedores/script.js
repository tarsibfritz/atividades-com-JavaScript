// Classe ENDEREÇO
class Endereco{
    // Método construtor do Endereço
    constructor(logradouro, numero, bairro, cep, municipio, estado, telefone){
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.municipio = municipio;
        this.estado = estado;
        this.telefone = telefone;
    }
}

// Classe FORNECEDOR
class Fornecedor {
    // Método construtor do Fornecedor
    constructor(nome, sobrenome, cnpj, sexo, dataNascimento, endereco, cep, telefone){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cnpj = cnpj;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.cep = cep;
        this.telefone = telefone;
    }

    // Método da classe (funcionalidade)
    exibirInformacoes(){
        console.log("Nome: " + this.nome + " " + this.sobrenome);
        console.log("CNPJ: " + this.cnpj);
        console.log("Sexo: " + this.sexo);
        console.log("Data de nascimento: " + this.dataNascimento);
        console.log("Endereço: " + this.endereco.logradouro);
        console.log("CEP: " + this.endereco.cep);
        console.log("Município: " + this.endereco.municipio);
        console.log("Estado: " + this.endereco.estado)
        console.log("Telefone: " + this.telefone);
    }
}

// Expressões para validação:
const regexSexo = /^[MFO]$/i;
const regexCNPJ = /^\d{14}$/;
const regexCEP = /^\d{5}-?\d{3}$/;
const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
const regexTelefone = /\(\d{2,3}\)\d{4,5}|\s\d{4,5}-\d{4}/;
const regexNumero = /\d/;     // \d = qualquer dígito numérico

// Função para ler o endereço
function lerEndereco(){
    // Declaração de variáveis
    let logradouro, numero, bairro, cep, municipio, estado, telefone;

    // Loop para solicitar entradas
    do{
        logradouro = prompt("Logradouro:")
        if (!logradouro) console.log("Logradouro inválido. Tente novamente.");
    } while(!logradouro)
    do{
        numero = prompt("Número:")
        if (!numero || !regexNumero.test(numero)) console.log("Número inválido. Tente novamente.");
    } while(!numero || !regexNumero.test(numero))
    do{
        bairro = prompt("Bairro:")
        if (!bairro) console.log("Bairro inválido. Tente novamente.");
    } while(!bairro)
    do{
        cep = prompt("CEP: (00000-000)")
        if (!cep || !regexCEP.test(cep)) console.log("CEP inválido. Tente novamente.");
    } while(!cep || !regexCEP.test(cep))
    do{
        municipio = prompt("Município: ")
        if (!municipio) console.log("Município inválido. Tente novamente.");
    } while(!municipio)
    do{
        estado = prompt("Estado:")
        if (!estado) console.log("Estado inválido. Tente novamente.");
    } while(!estado)
    do{
        telefone = prompt("Telefone:")
        if (!telefone || !regexTelefone.test(telefone)) console.log("Telefone inválido. Tente novamente.");
    } while(!telefone || !regexTelefone.test(telefone))

    // Criar novo objeto com os dados fornecidos:
    return new Endereco(logradouro, numero, bairro, cep, municipio, estado, telefone)
}

// Função para ler os dados
function lerDados(){
    // Declaração de variáveis
    let nome, sobrenome, cnpj, sexo, dataNascimento;

    endereco = lerEndereco(); // Ler os dados do endereço

    // Loop para solicitar entradas
    do{
        nome = prompt("Nome:")
        if (!nome) console.log("Nome inválido. Tente novamente.");
    } while(!nome)
    do{
        sobrenome = prompt("Sobrenome:")
        if (!sobrenome) console.log("Sobrenome inválido. Tente novamente.");
    } while(!sobrenome)
    do{
        cnpj = prompt("CNPJ (14 dígitos):")
        if (!cnpj || !regexCNPJ.test(cnpj)) console.log("CNPJ inválido. Tente novamente.");
    } while(!cnpj || !regexCNPJ.test(cnpj))
    do{
        sexo = prompt("Sexo: " + "\nm - masculino" + "\nf - feminino" + "\no - outros")
        if (!sexo || !regexSexo.test(sexo)) console.log("Sexo inválido. Tente novamente.");
    } while(!sexo || !regexSexo.test(sexo))
    do{
    dataNascimento = prompt("Data de nascimento (dd/mm/aaaa):")
    if (!dataNascimento || !regexData.test(dataNascimento)) console.log("Data de nascimento inválida. Tente novamente.");
    } while(!dataNascimento || !regexData.test(dataNascimento))

    // Criar novo objeto com os dados fornecidos:
    return new Fornecedor(nome, sobrenome, cnpj, sexo, dataNascimento, endereco, endereco.cep, endereco.telefone)
}

// Função principal
function main(){
    const qtdFornecedores = parseInt(prompt("Informe a quantidade de fornecedores que deseja cadastrar: "));
    const fornecedores = [] // variável com array vazio

   // Loop do cadastro
for (let i = 0; i < qtdFornecedores; i++){
    alert(`\nInforme os dados do fornecedor ${i + 1}:`);
    let fornecedor = lerDados(); // as respostas da função vão corresponder a um fornecedor 'x'

    // Adicionar o objeto 'fornecedor' ao array 'fornecedores' 
    fornecedores.push(fornecedor);
}

// Exibir as informações dos fornecedores
console.log("\n\n# Informações do(s) fornecedor(es) #");
fornecedores.forEach((fornecedor, index) => {  // index = índice atual do elemento (começa com zero) 
    console.log(`\nFornecedor ${index + 1}:`);
    fornecedor.exibirInformacoes();
})
}

// Chamada da Função Principal
main();