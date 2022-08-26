import "./Pokemon.css";
export default function ListaDePokemon(props) {
  return (
    <div className="CardPokemon">
      <div className="CardPokemon-image">
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="CardPokemon-id">
        <p>#{props.id}</p>
      </div>
      <div className="CardPokemon-name">
        <p>{props.nome}</p>
      </div>
      <div className="CardPokemon-type">
        <p>{props.tipo}</p>
      </div>
    </div>
  );
}
