class Serie {
  nome;
  anoLancamento;
  qttTemporadas;
}

var series = [];
for (let i = 0; i < 4; i++) {
  let serie = new Serie();
  serie.nome = prompt("Digite o nome da série");
  serie.anoLancamento = prompt("Digite o ano de lançamento");
  serie.qttTemporadas = prompt("Digite a quantidade de temporadas");
  series.push(serie);
  console.log(serie);
}
var serieMaisAntiga = series[0];
series.forEach((serie) => {
  if (serie.anoLancamento < serieMaisAntiga.anoLancamento) {
    serieMaisAntiga = serie;
  }
});
console.log(serieMaisAntiga);
