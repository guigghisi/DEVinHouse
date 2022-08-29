//Com o hook useRef, crie um código que simule o evento "focus" do input

import React, { useRef } from "react";

export default function M1S09E5() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
