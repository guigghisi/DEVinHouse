export const divUsuario = document.querySelector(".usuario");

export function renderizaCard(nome, imagem, descricao) {
  if (nome) {
    const h2 = document.createElement("h2");
    h2.textContent = nome;
    divUsuario.appendChild(h2);
  }

  if (imagem) {
    const img = document.createElement("img");
    img.setAttribute("src", imagem);
    divUsuario.appendChild(img);
  }

  if (descricao) {
    const p = document.createElement("p");
    p.setAttribute("id", "card-descricao");
    p.textContent = descricao;
    divUsuario.appendChild(p);
  }
}
