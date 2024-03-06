// Função principal
function dadosDoAluno() {
    // Função de validação: nome
    function validarNome(nome) {
      let regexNome = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/; // passo a passo: ^ = início da string | [a-zA-Z] = aceita letras maiúsculas e minúsculas | + = o elemento anterior deve ocorrer pelo menos uma vez | * = o elemento anterior pode ocorrer zero ou mais vezes | ?:... = parte opcional | $ = final da string
      return regexNome.test(nome);
    }
  
    // Função de validação: CPF
    function validarCPF(cpf) {
      let regexCPF = /\d{3}\.?\d{3}\.?\d{3}\-?\d{2}/; // passo a passo: \d{numero} = quantidade de dígitos aceitos | . = ponto literal | - = hífen literal | ? = parte opcional
      return regexCPF.test(cpf);
    }
  
    // Função de validação: sexo
    function validarSexo(sexo) {
      let regexSexo = /^[MmFfOo]$/; // passo a passo: ^ = início da string | [MmFfOo] = letras aceitas e o formato | $ = final da string
      return regexSexo.test(sexo);
    }
  
    // Função de validação: data de nascimento
    function validarNascimento(dataNascimento) {
      let regexNascimento = /[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{4}/; // passo a passo: [0-3]{1}[0-9]{1} = dia | [0-1]{1}[0-9]{1} = mês | [0-9]{4} = ano
      return regexNascimento.test(dataNascimento);
    }
  
    // Função de validação: endereço
    function validarEndereco(endereco) {
      let regexEndereco = /^[a-z0-9\s,.áéíóúâêôõãç]+$/i; // passo a passo: ^ = início da string | a-z = letras aceitas | 0-9 = números aceitos | s = corresponde a qualquer caracter (incluindo quebra de linha) | . e , = ponto e vírgula literal | + = o padrão anterior deve ocorrer pelo menos uma vez | $ = final da string | i = letras maiúscula e/ou minúscula
      return regexEndereco.test(endereco);
    }
  
    // Função de validação: telefone
    function validarTelefone(telefone) {
      let regexTelefone = /\(\d{2,3}\)\d{4,5}|\s\d{4,5}-\d{4}/; // passo a passo: ( ) = parênteses literais |  \d{numero} = quantidade de dígitos aceitos | '|' = alterância entre padrões | s = corresponde a qualquer caracter (incluindo quebra de linha) | - = hífen literal
      return regexTelefone.test(telefone);
    }
  
    // Coleta dos dados do aluno
    let nome, sobrenome, cpf, sexo, dataNascimento, endereco, telefone;
  
    while (true) {
      nome = prompt("Informe o seu nome: ");
      if (validarNome(nome)) break; // caso válido, prossiga
      else console.log("Nome inválido. Tente novamente.");
    }
  
    while (true) {
      sobrenome = prompt("Informe o seu sobrenome: ");
      if (validarNome(sobrenome)) break; // caso válido, prossiga
      else console.log("Sobrenome inválido. Tente novamente.");
    }
  
    while (true) {
      cpf = prompt("Digite o seu CPF: (xxx.xxx.xxx-xx)");
      if (validarCPF(cpf)) break; // caso válido, prossiga
      else console.log("CPF inválido. Tente novamente.");
    }
  
    while (true) {
      sexo = prompt(
        "Infome o seu sexo: " + "\nM - Masculino" + "\nF - Feminino" + "\nO - Outro"
      );
      if (validarSexo(sexo)) break; // caso válido, prossiga
      else console.log("Sexo inválido. Tente novamente.");
    }
  
    while (true) {
      dataNascimento = prompt("Digite a sua data de nascimento: dd/mm/aaaa");
      if (validarNascimento(dataNascimento)) break; // caso válido, prossiga
      else console.log("Data de nascimento inválida. Tente novamente.");
    }
  
    while (true) {
      endereco = prompt("Digite o seu endereço: ");
      if (validarEndereco(endereco)) break; // caso válido, prossiga
      else console.log("Endereço inválido. Tente novamente.");
    }
  
    while (true) {
      telefone = prompt("Digite o seu número de telefone: ");
      if (validarTelefone(telefone)) break; // caso válido, prossiga
      else console.log("Telefone inválido. Tente novamente.");
    }
  
    // Exibição
    console.log("\n# DADOS DO ALUNO #");
    console.log("Nome completo: " + nome + " " + sobrenome);
    console.log("CPF: " + cpf);
    console.log("Sexo: " + sexo);
    console.log("Data de nascimento: " + dataNascimento);
    console.log("Endereço: " + endereco);
    console.log("Telefone: " + telefone);
  }
  
  dadosDoAluno();