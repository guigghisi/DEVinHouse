const divPrincipal = document.getElementsByTagName("div")[0];

function criarDiv(texto) {
  const criarDiv = document.createElement("div");
  criarDiv.innerHTML += `<p>${texto}</p>`;
  divPrincipal.appendChild(criarDiv);
}
criarDiv("Texto qualquer");
criarDiv("Texto qualquer");
criarDiv("Texto qualquer");
criarDiv("Texto qualquer");
