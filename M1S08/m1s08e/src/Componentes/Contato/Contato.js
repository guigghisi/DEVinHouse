import "./Contato.css";
export default function Contato({ nome, imagem, mensagem }) {
  return (
    <div className="Contato">
      <div className="Imagem">
        <img src={imagem} alt="imagem do Perfil" className="imagemDoPerfil" />
      </div>
      <div className="Dados">
        <h3>{nome}</h3>
        <p>{mensagem}</p>
      </div>
    </div>
  );
}
