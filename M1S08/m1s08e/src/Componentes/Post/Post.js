import "./Post.css";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function Post({
  imagemDoPerfil,
  nomeDoAutor,
  dataDoPost,
  fotoDoPost,
  descricaoDoPost,
  curtidoPor,
  numeroDeCurtidas,
}) {
  return (
    <div className="Post">
      <PostHeader
        imagemDoPerfil={imagemDoPerfil}
        nomeDoAutor={nomeDoAutor}
        dataDoPost={dataDoPost}
      />
      <img src={fotoDoPost} alt="foto do post" className="FotoDoPost" />
      <p className="DescricaoDoPost">{descricaoDoPost}</p>
      <PostFooter curtidoPor={curtidoPor} numeroDeCurtidas={numeroDeCurtidas} />
    </div>
  );
}
