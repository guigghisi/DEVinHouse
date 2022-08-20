import "./App.css";
import Titulo from "./Componentes/Titulo";
import Texto from "./Componentes/Texto";
import Soma from "./Componentes/Soma";
import Botao from "./Componentes/Botao";
function App() {
  return (
    <div className="App">
      <Titulo />
      <Texto />
      <Soma numero1={10} numero2={20} />
      <Botao corDeFundo="#ccc" texto="Clique aqui" />
    </div>
  );
}

export default App;
