import "./App.css";
import Condicional from "./Componentes/Condicional";

export default function App({ isLoading }) {
  if (isLoading === true) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Condicional condicao={true} />
    </>
  );
}
