var nomePokemon = prompt("Digite o nome do seu Pokemon");

const xhr = new XMLHttpRequest();
xhr.onload = ({ target }) => {
  var pokemon = `Nome: ${target.response.name} \n Altura: ${target.response.height} \n Peso: ${target.response.weight}`;
  console.log(pokemon);
  let imagemPokemon = document.querySelector("#imagem");
  imagemPokemon.src = target.response.sprites.front_default;
};
xhr.onerror = (err) => console.log(err);
xhr.responseType = "json";
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + nomePokemon);

xhr.send();
