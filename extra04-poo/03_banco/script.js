// Classe ENDEREÇO
class Endereco {
    constructor(logradouro, numero, bairro, cep, municipio, estado, telefone) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.municipio = municipio;
        this.estado = estado;
        this.telefone = telefone;
    }
}

// Classe PESSOA
class TipoPessoa {
    constructor(nomeCompleto, tipo, cpf, dataNascimento, sexo, cnpj) {
        this.nomeCompleto = nomeCompleto;
        this.tipo = tipo;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cnpj = cnpj;
    }
}

// Classe NOVACONTA
class NovaConta {
    constructor(nome, tipo, endereco, tipoConta, telefone) {
        this.nome = nome;
        this.tipo = tipo;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipoConta = tipoConta;
    }
}

// Expressões para validação
const regexNumero = /\d/;
const regexCEP = /^\d{5}-?\d{3}$/;
const regexTelefone = /\(\d{2,3}\)\d{4,5}|\s\d{4,5}-\d{4}/;
const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
const regexSexo = /^[fmo]$/i;
const regexCNPJ = /^\d{14}$/;

// Função para ler o endereço
function lerEndereco(){
    // Declaração de variáveis
    let logradouro, numero, bairro, cep, municipio, estado, telefone;
    
    //Loop para solicitar entradas
    do{
        logradouro = prompt("Logradouro:")
        if (!logradouro) console.log("Logradouro inválido. Tente novamente.");
    } while(!logradouro)
    do{
        numero = prompt("Número: ")
        if (!numero || !regexNumero.test(numero)) console.log("Número inválido. Tente novamente.");
    } while(!numero || !regexNumero.test(numero))
    do{
        bairro = prompt("Bairro:")
        if (!bairro) console.log("Bairro inválido. Tente novamente.");
    } while(!bairro)
    do{
        cep = prompt("CEP:(00000-000)")
        if (!cep || !regexCEP.test(cep)) console.log("CEP inválido. Tente novamente.");
    } while(!cep || !regexCEP.test(cep))
    do{
        municipio = prompt("Município:")
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

// Função para ler o tipo de pessoa
function lerTipoPessoa(){
    let nomeCompleto, tipo, cpf, dataNascimento, sexo, cnpj;

    do{
        tipoPessoa = prompt("Escolha uma das pessoas abaixo:" + "\n1. Pessoa Física" + "\n2. Pessoa Jurídica");
        
        if (tipoPessoa === '1'){
            tipo = 'Pessoa Física';
            do{
                nomeCompleto = prompt("Nome Completo:")
                if (!nomeCompleto) console.log("Nome inválido. Tente novamente.");
            } while(!nomeCompleto)
            do{
                cpf = prompt("Informe o CPF:")
                if (!cpf || !regexCPF.test(cpf)) console.log("CPF inválido. Tente novamente.");
            } while(!cpf || !regexCPF.test(cpf))
            do{
                dataNascimento = prompt("Data de nascimento:")
                if (!dataNascimento || !regexData.test(dataNascimento)) console.log("Data inválida. Tente novamente");
            } while(!dataNascimento || !regexData.test(dataNascimento))
            do{
                sexo = prompt("Sexo:" + "\nm - masculino" + "\nf - feminino" + "\no - outros")
                if (!sexo || !regexSexo.test(sexo)) console.log("Sexo inválido. Tente novamente.");
            } while(!sexo || !regexSexo.test(sexo))
        }
        else if (tipo === '2'){
            tipo = 'Pessoa Jurídica'
            do{
                cnpj = prompt("CNPJ:")
                if (!cnpj || !regexCNPJ.test(cnpj)) console.log("CNPJ inválido. Tente novamente.");
            } while(!cnpj || !regexCNPJ.test(cnpj))
        } else {
            console.log("Opção inválida.")
        }
    } while (tipoPessoa !== '1' && tipoPessoa !== '2');

    // Criar novo objeto com os dados fornecidos:
    return new TipoPessoa(nomeCompleto, tipo, cpf, dataNascimento, sexo, cnpj);
}

// Função para ler o tipo de conta
function lerTipoConta() {
    let tipoConta;
    do {
        tipoConta = prompt("Escolha o tipo de conta deseja abrir:\n1. Poupança\n2. Corrente");
        if (tipoConta !== '1' && tipoConta !== '2') {
            console.log("Opção inválida.");
        }
    } while (tipoConta !== '1' && tipoConta !== '2');

    return tipoConta;
}

// Classe CONTA BANCÁRIA
class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo; // Recebe o saldo inicial da conta (zero) como parâmetro e o atribui à propriedade saldo do objeto.
    }
    // Método para calcular os rendimentos da conta poupança e aplicar a taxa sobre o valor sacado da conta corrente:
    calcularRendimentoPoupanca(meses) { 
        const taxaMensal = 0.03; // 3% ao mês
        let saldo = this.saldo;
        for (let i = 0; i < meses; i++) {
            saldo += saldo * taxaMensal;
        }
        return saldo - this.saldo;
    }

    aplicarTaxaCorrente(valorSacado, numeroSaques) {
        const taxa = 0.0175; // 1,75% de taxa sobre o valor sacado a partir do 3º saque
        if (numeroSaques >= 3) {
            return valorSacado + (valorSacado * taxa);
        }
        return valorSacado;
    }
}

// Função principal
function main() {
    const endereco = lerEndereco(); // chamar função de endereço com as informações
    const tipoPessoa = lerTipoPessoa(); // chamar função do tipo (pessoa física ou jurídica) com as informações
    const tipoConta = lerTipoConta();
    
    const nome = tipoPessoa.nomeCompleto;
    const telefone = endereco.telefone;

    let novaConta = new NovaConta(nome, tipoPessoa.tipo, endereco, tipoConta, telefone);

    if (tipoConta === '1') { // Poupança
        const saldoInicial = parseFloat(prompt("Informe o saldo inicial da conta poupança:"));
        const contaPoupanca = new ContaBancaria(saldoInicial);

        const rendimento1Ano = contaPoupanca.calcularRendimentoPoupanca(12); // 12 como argumento = 12 meses = 1 ano
        const rendimento2Anos = contaPoupanca.calcularRendimentoPoupanca(24); // 24 como argumento = 24 meses = 2 anos
        const rendimento5Anos = contaPoupanca.calcularRendimentoPoupanca(60); // 60 como argumento = 60 meses = 5 anos

        console.log(`Rendimento em 1 ano: R$ ${rendimento1Ano.toFixed(2)}`);
        console.log(`Rendimento em 2 anos: R$ ${rendimento2Anos.toFixed(2)}`);
        console.log(`Rendimento em 5 anos: R$ ${rendimento5Anos.toFixed(2)}`);
    } else if (tipoConta === '2') { // Corrente
        const valorSacado = parseFloat(prompt("Informe o valor a ser sacado da conta corrente:"));
        const numeroSaques = parseInt(prompt("Informe o número de saques realizados:"));

        const contaCorrente = new ContaBancaria();

        const valorComTaxa = contaCorrente.aplicarTaxaCorrente(valorSacado, numeroSaques);
        console.log(`Valor a ser sacado com taxa aplicada: R$ ${valorComTaxa.toFixed(2)}`);
    }
}

// Chamada da função principal
main();