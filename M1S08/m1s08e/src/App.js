import "./App.css";
import Titulo from "./Componentes/Titulo";
import Texto from "./Componentes/Texto";
import Soma from "./Componentes/Soma";
function App() {
  return (
    <div className="App">
      <Titulo />
      <Texto />
      <Soma numero1={10} numero2={20} />
    </div>
  );
}

export default App;
