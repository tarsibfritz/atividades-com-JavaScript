let nomeAluno = prompt("Informe o nome do aluno: ");
let matricula = prompt("Informe a matrícula do aluno: ");
let disciplina = prompt("Informe a disciplina: ");
let nota = prompt("Informe a nota do aluno: ");

if (nota >= 60) {
  console.log("Aprovado!");
}
if (nota < 60 && nota >= 50) {
  console.log("Em recuperação!");
}
if (nota < 50) {
  console.log("Reprovado!");
}
