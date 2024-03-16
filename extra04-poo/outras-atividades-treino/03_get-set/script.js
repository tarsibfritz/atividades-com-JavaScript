// Classe ContaBancaria com propriedades de saldo e limite
class ContaBancaria{
    constructor(saldo, limite){
        this._saldo = saldo;
        this._limite = limite;
    }

    // Get saldo() --> acessar o valor da propriedade saldo
    get saldo(){
        return this._saldo;
    }

    // Set saldo(novoSaldo) --> modifica o valor da propriedade saldo e verifica se o novo saldo é maior ou igual a zero antes de atribuí-lo à propriedade
    set saldo(novoSaldo){
        if (novoSaldo >= 0){
            this._saldo = novoSaldo;
        } else{
            console.log("O saldo não pode ser negativo.")
        }
    }

    // Get limite() --> acessar o valor da propriedade limite
    get limite(){
        return this._limite;
    }
}

// Instância
let minhaConta = new ContaBancaria(1000, 500)

// Exibição
console.log(`Minha Conta: ` + `\nSaldo: ${minhaConta.saldo}` + `\nLimite: ${minhaConta.limite}`)