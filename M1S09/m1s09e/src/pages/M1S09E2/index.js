//Mostrar no console o valor digitado no input por meio do recurso useEffect

import React, { useState, useEffect } from "react";

export default function M1S09E2() {
  const [imput, setImput] = useState("");
  useEffect(() => {
    console.log(imput);
  }, [imput]);
  return (
    <div>
      <h1>Digite algo</h1>
      <input
        type="text"
        value={imput}
        onChange={(e) => setImput(e.target.value)}
      />
    </div>
  );
}
