import React, { useState} from "react";

export default function M1S09E10() {
  const [texto, setTexto] = useState("Digite algo...");
  return (
    <div style={{ textAlign: "center" }}>
      <span>{texto}</span>
      <br />
      <input
        onKeyDown={() => {
          setTexto("Você está digitando...");
        }}
        onKeyUp={() => {
        
          setTexto("Digite algo...");
        }}
      ></input>
    </div>
  );
}
