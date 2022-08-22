import "./App.css";
import Post from "./Componentes/Post/Post";

export default function App({ isLoading }) {
  if (isLoading === true) {
    return <p>Carregando...</p>;
  }
  const posts = [
    {
      imagemDoPerfil:
        "https://avatars.githubusercontent.com/u/52177969?s=40&v=4",
      nomeDoAutor: "Guilherme Ghisi",
      dataDoPost: "Hoje",
      fotoDoPost:
        "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=850,567",
      descricaoDoPost: "Gato",
      curtidoPor: "Alberto",
      numeroDeCurtidas: 24,
    },
  ];
  return (
    <>
      {posts.map((post) => (
        <Post
          imagemDoPerfil={post.imagemDoPerfil}
          nomeDoAutor={post.nomeDoAutor}
          dataDoPost={post.dataDoPost}
          fotoDoPost={post.fotoDoPost}
          descricaoDoPost={post.descricaoDoPost}
          curtidoPor={post.curtidoPor}
          numeroDeCurtidas={post.numeroDeCurtidas}
        />
      ))}
    </>
  );
}
