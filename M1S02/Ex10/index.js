var aluno = prompt("Digite o nome do aluno");
var notas = [];
var media = 0;
while (notas.length < 4) {
  notas.push(prompt("Digite a nota"));
}
for (var i = 0; i < notas.length; i++) {
  media += parseInt(notas[i]);
}
media = media / notas.length;
if (media >= 7) {
  alert("Aluno " + aluno + " aprovado");
} else {
  alert("Aluno " + aluno + " reprovado");
}
