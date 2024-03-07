// Função de validação: nome
function validarNome(nome) {
  let regexNome = /^[a-zA-Z]+$/; // expressão para o nome da pessoa
  return regexNome.test(nome);
}

// Função de validação: sexo
function validarSexo(sexo) {
  let regexSexo = /^[mfpo]$/i; // expressão para o sexo da pessoa
  return regexSexo.test(sexo);
}

// Função de validação: idade
function validarIdade(idade) {
    if (!isNaN(idade) && idade >= 0 && idade == parseInt(idade)){
        return true;
    }else {
        return false;
    }
}

// Função de validação: estado civil
function validarEstadoCivil(estadoCivil) {
  let regexEstadoCivil = /^[csv]$/i; // expressão para o estado civil da pessoa
  return regexEstadoCivil.test(estadoCivil);
}

// Função principal
function main() {
    let pessoas = [];
    let somaIdades = 0;
    let maiorIdade = {idade: 0};
    let menorIdade = {idade: Infinity};
    let maioresDeVinte = [];
    let menoresDeDez = [];
    let masculinos = [];
    let femininos = [];
    let outros = [];
    let casados = [];
    let solteiros = [];
    let viuvos = [];

    for (let i = 0; i < 10; i++) {
        let nome = prompt(`Pessoa ${i+1}: Digite o nome da pessoa:`);
        let sexo = prompt(`Pessoa ${i+1}: Digite o sexo da pessoa (M/F/P/O):`);
        let idade = parseInt(prompt(`Pessoa ${i+1}: Digite a idade da pessoa:`));
        let estadoCivil = prompt(`Pessoa ${i+1}: Digite o estado civil da pessoa (C/S/V):`);

        if (validarNome(nome) && validarSexo(sexo) && validarIdade(idade) && validarEstadoCivil(estadoCivil)) {
            pessoas.push({nome, sexo, idade, estadoCivil});
            somaIdades += idade;

            if (idade > maiorIdade.idade) {
                maiorIdade = {nome, sexo, idade, estadoCivil};
            }

            if (idade < menorIdade.idade) {
                menorIdade = {nome, sexo, idade, estadoCivil};
            }

            if (idade > 20) {
                maioresDeVinte.push({nome, sexo, idade, estadoCivil});
            }

            if (idade < 10) {
                menoresDeDez.push({nome, sexo, idade, estadoCivil});
            }

            if (sexo.toLowerCase() === 'm') {
                masculinos.push({nome, sexo, idade, estadoCivil});
            } else if (sexo.toLowerCase() === 'f') {
                femininos.push({nome, sexo, idade, estadoCivil});
            } else {
                outros.push({nome, sexo, idade, estadoCivil});
            }

            if (estadoCivil.toLowerCase() === 'c') {
                casados.push({nome, sexo, idade, estadoCivil});
            } else if (estadoCivil.toLowerCase() === 's') {
                solteiros.push({nome, sexo, idade, estadoCivil});
            } else {
                viuvos.push({nome, sexo, idade, estadoCivil});
            }
        } else {
            console.log("Dados inválidos. Por favor, digite novamente.");
            i--; // Volta para repetir a iteração atual
        }
    }

    console.log("Média de idade do grupo:", somaIdades / pessoas.length);
    console.log("Soma de todas as idades do grupo:", somaIdades);
    console.log("Pessoa com maior idade:", maiorIdade);
    console.log("Pessoa com menor idade:", menorIdade);
    console.log("Pessoas com mais de 20 anos:", maioresDeVinte);
    console.log("Pessoas com menos de 10 anos:", menoresDeDez);
    console.log("Pessoas do sexo masculino:", masculinos);
    console.log("Pessoas do sexo feminino:", femininos);
    console.log("Pessoas que não informaram o sexo ou marcaram outros:", outros);
    console.log("Pessoas casadas:", casados);
    console.log("Pessoas solteiras:", solteiros);
    console.log("Pessoas viúvas:", viuvos);
}

// Chamada da função principal
main();


