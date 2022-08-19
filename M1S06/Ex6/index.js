document.querySelector(".button").addEventListener("click", pegaInfoPokemon);

function pegaInfoPokemon() {
  let pokemon = document.querySelector(".input__search").value;
  const xhr = new XMLHttpRequest();
  xhr.onload = ({ target }) => {
    console.log(target.response);
    let imagemPokemon = document.querySelector(".pokemonimage");
    imagemPokemon.src = target.response.sprites.front_default;
    document.querySelector(".pokemonname").innerHTML = target.response.name;
    document.querySelector(".pokemonnumber").innerHTML = target.response.id;
    document.querySelector("#weight").innerHTML = target.response.weight;
    target.response.types.forEach((element) => {
      document.querySelector("#pokemontype").innerHTML +=
        element.type.name + "<br/>";
    });
    target.response.abilities.forEach((habilidade) => {
      document.querySelector("#ability").innerHTML +=
        habilidade.ability.name + "<br />";
    });
  };
  xhr.onerror = (err) => console.log(err);
  xhr.responseType = "json";
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon);
  xhr.send();
}
