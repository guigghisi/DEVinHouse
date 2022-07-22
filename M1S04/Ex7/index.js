let arrayAlunos = [
  {
    nome: "Carlos",
    media: 10,
  },
  {
    nome: "Julia",
    media: 8,
  },
  {
    nome: "Rayane",
    media: 6,
  },
  {
    nome: "Arthur",
    media: 5,
  },
];
var quantidadeReprovados = 0;

const lista = document.getElementById("lista");
function verificarReprovado(aluno) {
  if (aluno.media < 7) {
    const item = document.createElement("li");
    quantidadeReprovados++;
    item.innerHTML += `${aluno.nome}<br>`;
    lista.appendChild(item);
  }
}
arrayAlunos.forEach(verificarReprovado);
if (quantidadeReprovados === 0) {
  const principal = document.getElementsByTagName("body")[0];
  const item = document.createElement("h2");
  item.innerHTML += `Parabéns a todos da turma`;
  principal.appendChild(item);
  lista.textContent = "";
}
