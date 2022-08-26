import "./App.css";
import ListaDePokemon from "./Componentes/Pokedex/ListaDePokemon";

export default function App({ isLoading }) {
  if (isLoading === true) {
    return <p>Carregando...</p>;
  }
  const pokemons = [
    {
      id: 1,
      nome: "Bulbasaur",
      tipo: "Grass e Poison",
      imagem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      nome: "Ivysaur",
      tipo: "Grass e Poison",
      imagem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      id: 3,
      nome: "Venusaur",
      tipo: "Grass e Poison",
      imagem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      id: 4,
      nome: "Charmander",
      tipo: "Fire",
      imagem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 5,
      nome: "Charmeleon",
      tipo: "Fire",
      imagem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      id: 6,
      nome: "Charizard",
      tipo: "Fire",
      imagem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
  ];
  return (
    <>
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <div className="ListaPokemon">
          {pokemons.map((pokemon) => (
            <ListaDePokemon
              id={pokemon.id}
              nome={pokemon.nome}
              tipo={pokemon.tipo}
              imagem={pokemon.imagem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
