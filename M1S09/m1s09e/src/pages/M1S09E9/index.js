import React, { useState, useEffect } from "react";

export default function M1S09E9() {
  const [horario, setHorario] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHorario(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Ola, Mundo!</h1>
      <h2>Agora são {horario} </h2>
    </div>
  );
}
