import "./App.css";
import PropTypes from "prop-types";
import Contato from "./Componentes/Contato/Contato";

export default function App({ isLoading }) {
  if (isLoading === true) {
    return <p>Carregando...</p>;
  }
  const contatos = [
    {
      nome: "Fulano",
      imagem: "https://placeimg.com/64/64/people",
      mensagem: "Olá, tudo bem?",
    },
  ];
  Contato.propTypes = {
    nome: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    mensagem: PropTypes.string.isRequired,
  };
  return (
    <>
      {contatos.map((contato) => (
        <Contato key={contato.nome} {...contato} />
      ))}
    </>
  );
}
