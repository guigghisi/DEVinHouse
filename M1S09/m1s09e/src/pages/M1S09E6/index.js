import React from "react";
import Mensagem from "../../component/E6";

export default function M1S09E6() {
  const listaMensagens = [
    {
      id: 1,
      img: "https://placeimg.com/50/50/any",
      nome: "João",
      text: "Olá, tudo bem?",
    },
    {
      id: 2,
      img: "https://placeimg.com/50/50/any",
      nome: "Maria",
      text: "Olá, tudo sim e com você?",
    },
    {
      id: 3,
      img: "https://placeimg.com/50/50/any",
      nome: "João",
      text: "Tudo ótimo também!",
    },
  ];
  const [mensagem, setMensagem] = React.useState(listaMensagens);
  return (
    <div>
      <button
        onClick={() =>
          setMensagem([
            ...mensagem,
            { id: 4, img: "", nome: "Nome Default", text: "Texto Default" },
          ])
        }
      >
        Adicionar mensagem
      </button>
      {mensagem.map((value) => (
        <Mensagem
          key={value.id}
          img={value.img}
          nome={value.nome}
          text={value.text}
        />
      ))}
    </div>
  );
}
