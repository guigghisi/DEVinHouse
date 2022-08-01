import { renderizaCard, divUsuario } from "./usuario.js";

const button = document.querySelector("button");

const form = document.querySelector("form");
const nameInput = document.querySelector("#nome");
const imagemInput = document.querySelector("#imagem");
const descricaoInput = document.querySelector("#descricao");

button.addEventListener("click", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const imagem = imagemInput.value;
  const descricao = descricaoInput.value;

  divUsuario.innerHTML = "";

  renderizaCard(name, imagem, descricao);

  form.reset();
});
