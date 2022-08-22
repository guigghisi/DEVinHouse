import "./App.css";
import PropTypes from "prop-types";
import Produto from "./Componentes/Produto/Produto";

export default function App({ isLoading }) {
  if (isLoading === true) {
    return <p>Carregando...</p>;
  }
  const produtos = [
    {
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_632159-MLB50098814188_052022-O.webp",
      nome: "Produto 1",
      preco: "R$ 100,00",
    },
  ];
  Produto.propTypes = {
    nome: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
  };
  return (
    <>
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </>
  );
}
