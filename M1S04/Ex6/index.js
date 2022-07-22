let cidades = [
  { nome: "Patos de Minas", populacao: 153585 },
  { nome: "Lages", populacao: 157349 },
  { nome: "Ibiúna", populacao: 79479 },
  { nome: "Maringá", populacao: 403063 },
  { nome: "Curitiba", populacao: 1963726 },
  { nome: "Florianópolis", populacao: 508826 },
  { nome: "Pato Branco", populacao: 84779 },
];
console.log(cidades);
let cidadesPopulacao = cidades
  .filter(function (cidade) {
    return cidade.populacao > 200000;
  })
  .sort(function (a, b) {
    return a.populacao - b.populacao;
  })
  .map(function (cidade) {
    return cidade.nome;
  });
console.log(cidadesPopulacao);
