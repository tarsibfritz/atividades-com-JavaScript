// Função de validação: quantidade de alunos
function qtdAlunos(quantidade) {
  let regexQtdAlunos = /^\d+$/; // passo a passo: ^ = início da string | \d+ = um ou mais dígitos numéricos ("\d" = 0-9 e "+"" = um ou mais dígitos) | $ = final da string
  return regexQtdAlunos.test(quantidade);
}

// Função de validação: notas
function validarNota(nota) {
  let regexNota = /^(100|^\d{1,2})(\.\d)?$/; // passo a passo: ^ = início da string | 100 = verifica se a nota é exatamente igual a 100 | \d{1,2} = um ou dois digitos de 0-9 |'|' = ou/alternância | ^\d = começa com um dígito de 0-9 | (\.\d)? = parte opcional | $ = final da string |
  return regexNota.test(nota);
}

// Função para solicitar as informações do aluno
function informacoesAluno(numero) {
  let nome = prompt("Informe o nome do aluno " + numero + ":");
  let nota1 = prompt("Digite a primeira nota de " + nome + ":");
  let nota2 = prompt("Digite a segunda nota de " + nome + ":");
  return { nome, nota1, nota2 };
}

// Função para calcular a média + verificar se foi aprovado
function calcularMedia(aluno) {
  if (validarNota(aluno.nota1) && validarNota(aluno.nota2)) {
    let media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2)) / 2;
    console.log("Aluno: " + aluno.nome);
    console.log("Média: " + media.toFixed(2));

    if (media >= 60) {
      console.log("Situação: Aprovado");
    } else {
      console.log("Situação: Reprovado");
    }
  } else {
    console.log("Por favor, insira notas válidas para o aluno " + aluno.nome);
  }
}

// Informe a quantidade de alunos
let quantidade = prompt("Digite a quantidade de alunos: ");

if (qtdAlunos(quantidade)) {
  let alunos = [];

  for (let i = 1; i <= quantidade; i++) {
    let aluno = informacoesAluno(i);
    alunos.push(aluno);
  }

  // Calcular e exibir a média de cada aluno
  alunos.forEach((aluno) => {
    calcularMedia(aluno);
    console.log("--------------------------------------------");
  });
} else {
  console.log("Por favor, insira uma quantidade válida de alunos.");
}
