import React, { useState } from "react";

export default function M1S09E3() {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <p>Você clicou {clicks} vezes</p>
      <button onClick={() => setClicks(clicks + 1)}>Clique aqui</button>
    </div>
  );
}
