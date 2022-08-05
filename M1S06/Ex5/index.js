document
  .querySelector("#btnPokemon")
  .addEventListener("click", pegaInfoPokemon);

function pegaInfoPokemon() {
  let nomePokemon = document.querySelector("#nomePokemon").value;
  const xhr = new XMLHttpRequest();
  xhr.onload = ({ target }) => {
    document.querySelector(
      "#informacao"
    ).innerHTML = `Nome: ${target.response.name} <br /> Altura: ${target.response.height} <br />  Peso: ${target.response.weight}`;

    let imagemPokemon = document.querySelector("#imagem");
    imagemPokemon.src = target.response.sprites.front_default;

    document.querySelector("#listaHabilidades").innerHTML =
      "<p>Habilidades:</p>";
    target.response.abilities.forEach((habilidade) => {
      document.querySelector(
        "#listaHabilidades"
      ).innerHTML += `<li>${habilidade.ability.name} </li><br />`;
    });
  };
  xhr.onerror = (err) => console.log(err);
  xhr.responseType = "json";
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + nomePokemon);
  xhr.send();
}
