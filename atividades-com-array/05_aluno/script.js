aluno = {};

aluno.nomeCompleto = prompt("Informe o nome completo do aluno: ");
aluno.matricula = prompt("Informe a matrícula: ");
aluno.curso = prompt("Informe o nome do curso :");

aluno.disciplinas = [];

for (let i = 1; i <= 5; i++){
    let disciplina = prompt("Digite o nome da disciplina " + i + ":");
    let nota = parseFloat(prompt("Digite a nota da disciplina " + i + ":"));
  
    aluno.disciplinas.push({ disciplina, nota });
}

let somaNotas = 0
for (let i = 0; i < aluno.disciplinas.length; i++){
    somaNotas += aluno.disciplinas[i].nota;
}

let mediaGeral = somaNotas / aluno.disciplinas.length;

console.log("Dados do aluno:");
console.log("Matrícula: " + aluno.matricula);
console.log("Nome Completo: " + aluno.nomeCompleto);
console.log("Nome do Curso: " + aluno.nomeCurso);

console.log("\nNotas das disciplinas:");
for (let i = 0; i < aluno.disciplinas.length; i++) {
  console.log(aluno.disciplinas[i].disciplina + ": " + aluno.disciplinas[i].nota);
}

console.log("\nMédia Geral: " + mediaGeral.toFixed(2));

console.log("\nObjeto aluno:");
console.log(aluno);