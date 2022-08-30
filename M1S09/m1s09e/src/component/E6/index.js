import "./index.css";
export default function Mensagem(value) {
  return (
    <div className="card">
      <img className="imagem" src={value.img} />
      <div className="texto">
        <h3>{value.nome}</h3>
        <span>{value.text}</span>
      </div>
    </div>
  );
}
