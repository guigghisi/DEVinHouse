
import React, { useState } from "react";

export default function M1S09E4() {
  const [titulo, setTitulo] = useState("");
  document.title = titulo;
  return (
    <div>
      <span>Botão clicado: {titulo}</span>
      <br />
      <button onClick={() => setTitulo("Título 1")}>Título 1</button>
      <button onClick={() => setTitulo("Título 2")}>Título 2</button>
    </div>
  );
}
