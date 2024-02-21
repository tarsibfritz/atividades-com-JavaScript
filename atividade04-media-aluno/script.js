var nomeDisciplina = prompt("Informe o nome da disciplina: ");
var nomeAluno = prompt("Informe o nome do aluno: ");
var nota1 = parseFloat(prompt("Informe a primeira nota na disciplina: "));
var nota2 = parseFloat(prompt("Informe a segunda nota na disciplina: "));
var nota3 = parseFloat(prompt("Informe a terceira nota na disciplina: "));
var nota4 = parseFloat(prompt("Informe a quarta nota na disciplina: "));

console.log("Disciplina: " + nomeDisciplina);
console.log("Nome do Aluno: " + nomeAluno);
console.log("Notas na disciplina: " + nota1);
console.log("Notas na disciplina: " + nota2);
console.log("Notas na disciplina: " + nota3);
console.log("Notas na disciplina: " + nota4);

var media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média das notas: " + media);
