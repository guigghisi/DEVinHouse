var avaliacao = [];
var avaliacaoRuim = 0;
while (avaliacao.length < 4) {
  var nota = prompt(
    "Qual a nota para avaliação da série Stranger Things, ruim, bom ou excelente?"
  );
  if (nota.toLocaleLowerCase() == "ruim") {
    avaliacao.push(nota);
    avaliacaoRuim++;
  } else if (
    nota.toLocaleLowerCase() == "bom" ||
    nota.toLocaleLowerCase() == "excelente"
  ) {
    avaliacao.push(nota);
  } else {
    alert("Você digitou algo errado, tente novamente");
  }
}
document.write("<h3>Total de avaliações ruim: " + avaliacaoRuim + "</h3>");
