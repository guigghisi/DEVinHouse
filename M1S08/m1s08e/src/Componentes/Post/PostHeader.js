export default function PostHeader({
  imagemDoPerfil,
  nomeDoAutor,
  dataDoPost,
}) {
  return (
    <div className="Header">
      <img
        src={imagemDoPerfil}
        alt="imagem Do Perfil"
        className="imagemDoPerfil"
      />
      <div className="Header-dados">
        <h3>{nomeDoAutor}</h3>
        <p>{dataDoPost}</p>
      </div>
      <img
        src="https://img.icons8.com/material-rounded/24/000000/menu-2.png"
        alt="menu"
        className="Menu"
      />
    </div>
  );
}
