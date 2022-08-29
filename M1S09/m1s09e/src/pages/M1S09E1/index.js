
import React, { useState } from "react";

export default function M1S09E1() {
  let listaFrutas = ["Banana", "Maçã", "Uva", "Pera", "Abacaxi"];
  const [frutas, setFrutas] = useState(listaFrutas);
  return (
    <div>
      <h1>Lista de Frutas</h1>
      <ul>
        {frutas.map((fruta) => (
          <li>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}
