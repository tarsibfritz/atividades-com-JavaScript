// Função de validação: nome completo
function validarNome(nome, sobrenome) {

  let regexNome = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/; // passo a passo: ^ = início da string | [a-zA-Z] = aceita letras maiúsculas e minúsculas | + = o elemento anterior deve ocorrer pelo menos uma vez | * = o elemento anterior pode ocorrer zero ou mais vezes | ?:... = parte opcional | $ = final da string

    
  if (regexNome.test(nome) && regexNome.test(sobrenome)) {
    console.log("Nome e sobrenome válidos.");
    
  } else {
    console.log("Nome e/ou sobrenome inválidos.");
  }
}

// Função de validação: CPF
function validarCPF(cpf) {
  let regexCPF = /\d{3}\.?\d{3}\.?\d{3}\-?\d{2}/; // passo a passo: \d{numero} = quantidade de dígitos aceitos | . = ponto literal | - = hífen literal | ? = parte opcional

  if (regexCPF.test(cpf)) {
    console.log("CPF válido.");
  } else {
    console.log("CPF inválido.");
  }
}

// Função de validação: sexo
function validarSexo(sexo) {
  let regexSexo = /^[MmFfOo]$/; // passo a passo: ^ = início da string | [MmFfOo] = letras aceitas e o formato | $ = final da string

  if (regexSexo.test(sexo)) {
    console.log("Sexo válido.");
  } else {
    console.log("Sexo inválido.");
  }
}

// Função de validação: data de nascimento
function validarNascimento(dataNascimento) {
  let regexNascimento = /[0-3]{1}[0-9]{1}[/][0-1]{1}[0-9]{1}[/][0-9]{4}/; // passo a passo: [0-3]{1}[0-9]{1} = dia | [0-1]{1}[0-9]{1} = mês | [0-9]{4} = ano

  if (regexNascimento.test(dataNascimento)) {
    console.log("Data de nascimento válida.");
  } else {
    console.log("Data de nascimento inválida.");
  }
}

// Função de validação: endereço
function validarEndereco(endereco) {
  let regexEndereco = /^[a-z0-9\s,.áéíóúâêôõãç]+$/i; // passo a passo: ^ = início da string | a-z = letras aceitas | 0-9 = números aceitos | s = corresponde a qualquer caracter (incluindo quebra de linha) | . e , = ponto e vírgula literal | + = o padrão anterior deve ocorrer pelo menos uma vez | $ = final da string | i = letras maiúscula e/ou minúscula

  if (regexEndereco.test(endereco)) {
    console.log("Endereço válido.");
  } else {
    console.log("Endereço inválido.");
  }
}

// Função de validação: telefone
function validarTelefone(telefone) {
  let regexTelefone = /\(\d{2,3}\)\d{4,5}|\s\d{4,5}-\d{4}/; // passo a passo: ( ) = parênteses literais |  \d{numero} = quantidade de dígitos aceitos | '|' = alterância entre padrões | s = corresponde a qualquer caracter (incluindo quebra de linha) | - = hífen literal

  if (regexTelefone.test(telefone)) {
    console.log("Telefone válido.");
  } else {
    console.log("Telefone inválido.");
  }
}

// Função principal
function dadosDoAluno() {
  // Coleta dos dados do aluno
  let nome = prompt("Informe o seu nome: ");
  let sobrenome = prompt("Informe o seu sobrenome: ");
  let cpf = prompt("Digite o seu CPF: (xxx.xxx.xxx-xx)");
  let sexo = prompt(
    "Infome o seu sexo: " + "\nM - Masculino" + "\nF - Feminino" + "\nO - Outro"
  );
  let dataNascimento = prompt("Digite a sua data de nascimento: dd/mm/aaaa");
  let endereco = prompt("Digite o seu endereço: ");
  let telefone = prompt("Digite o seu número de telefone: ");

  // Exibição
  console.log("\n# DADOS DO ALUNO #")
  console.log("Nome completo: " + nome + sobrenome)
  console.log("CPF: " + cpf)
  console.log("Sexo: " + sexo)
  console.log("Data de nascimento: " + dataNascimento)
  console.log("Endereço: " + endereco)
  console.log("Telefone: " + telefone)
}

dadosDoAluno()