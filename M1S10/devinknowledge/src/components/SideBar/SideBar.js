import { useState } from "react";
export default function SideBar({ tipList, setTipList }) {
  const [tip, setTip] = useState({
    idCard: 1,
    titulo: "",
    linguagem: "",
    categoria: "",
    descricao: "",
    video: "",
  });
  console.log(tip);
  function salvar() {
    if (validarCampos()) {
      setTipList([...tipList, tip]);
      alert("Card salvo com sucesso!");
      /*    colocarCardDiv(); */
      /* contagemDeCategoria(); */
    }
  }

  function colocarCardDiv() {
    /* setTipList(JSON.parse(localStorage.getItem("cards")) || []); */
    let cardDiv = document.querySelector("#cardDicas");
    cardDiv.innerHTML = "";
    tipList.forEach((card) => {
      var cardAuxiliar = document.createElement("div");
      cardAuxiliar.id = "modeloCard";
      cardAuxiliar.innerHTML = `
      <div id="tituloCard">
      <p>${card.titulo}</p>
    </div> 
    <div id="linguagemCard">
      <p><strong>Linguagem/Skill:    ${card.linguagem}</strong></p>
    </div>
    <div id="categoriaCard">
      <p>Categoria:     ${card.categoria}</p>
    </div>
    <div id="descricaoCard">
      <p>${card.descricao}</p>
    </div>
    <div id="botoesCard">
    <div id="divBtnVideo">
      <button type="button" id="btnVideo"><img id="iconeVideo" src="assets/video.png" height="30px" alt="iconeVideo"></button>
    </div>
    <div id="divBtnEditar">
      <button type="button" id="btnEditar" onclick="editarCard(${tipList.indexOf(
        card
      )})"><img id="iconeEditar" src="assets/editar.png" height="30px" alt="iconeEditar"></button>
    </div>
    <div id="divBtnExcluir" onclick="deletarCard(${tipList.indexOf(card)})">
      <button type="button" id="btnExcluir"><img id="iconeLixeira" src="assets/lixeira.png" height="30px" alt="iconeLixeira"></button>
    </div>
    </div>
      `;
      if (card.link !== "") {
        cardAuxiliar.querySelector("#btnVideo").onclick = function () {
          window.open(card.link, "_blank");
        };
      } else if (card.link === "") {
        cardAuxiliar.querySelector("#divBtnVideo").remove();
      }

      cardDiv.appendChild(cardAuxiliar);
    });
  }

  function validarCampos() {
    if (
      tip.titulo === "" ||
      tip.linguagem === "" ||
      tip.categoria === "" ||
      tip.descricao === "" ||
      tip.titulo.length < 9 ||
      tip.linguagem.length < 4 ||
      tip.descricao.length < 32
    ) {
      alert("Preencha os campos corretamente!");
      return false;
    } /* else if (validaUrlYoutube(tip.video) && tip.video == "") {
      return false;
    } */ else {
      return true;
    }
  }

  function contagemDeCategoria() {
    /* setTipList(JSON.parse(localStorage.getItem("cards")) || []);
    tipList.forEach((card) => {
      total++;
      if (card.categoria == "frontend") {
        frontEnd++;
      } else if (card.categoria == "backend") {
        backEnd++;
      } else if (card.categoria == "fullstack") {
        fullstack++;
      } else if (card.categoria == "comportamental/soft") {
        comportamental++;
      }
    });
    document.querySelector("#total").innerHTML = total;
    document.querySelector("#frontEnd").innerHTML = frontEnd;
    document.querySelector("#backEnd").innerHTML = backEnd;
    document.querySelector("#fullStack").innerHTML = fullstack;
    document.querySelector("#softSkill").innerHTML = comportamental; */
  }

  function validaUrlYoutube(url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div id="cadastro">
      <div id="cabecalho">
        <img id="livro" src="assets/book.png" alt="livro" />
        <div id="textoTitulo">
          <p>DEVin</p>
        </div>
        <div id="textoTituloH1">
          <h1>Knowledge</h1>
        </div>
      </div>
      <div id="subtitulo">
        <p>Learn, Code and Save</p>
      </div>
      <div id="formulario">
        <form>
          <div id="divInputTitulo">
            <label htmlFor="labelTitulo">Título</label>
            <input
              value={tip.titulo}
              onChange={(e) => {
                setTip({ ...tip, titulo: e.target.value });
              }}
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Digite um título"
              minLength="8"
              maxLength="64"
            />
          </div>
          <div id="divInputLinguagem">
            <label htmlFor="labelLinguagem">Linguagem/Skill</label>
            <input
              value={tip.linguagem}
              onChange={(e) => {
                setTip({ ...tip, linguagem: e.target.value });
              }}
              type="text"
              id="linguagem"
              name="linguagem"
              placeholder="Digite uma linguagem ou skill"
              minLength="4"
              maxLength="16"
            />
          </div>
          <div id="divInputCategoria">
            <label htmlFor="labelCategoria">Categoria</label>
            <select
              value={tip.categoria}
              onChange={(e) => {
                setTip({ ...tip, categoria: e.target.value });
              }}
              id="categoria"
              name="categoria"
              placeholder="Digite uma linguagem
              ou skill"
            >
              <option value="">Selecione uma categoria</option>
              <option value="frontend">FrontEnd</option>
              <option value="backend">BackEnd</option>
              <option value="fullstack">FullStack</option>
              <option value="comportamental/soft">Comportamental/Soft</option>
            </select>
          </div>
          <div id="divInputDescricao">
            <label htmlFor="labelDescricao">Descrição</label>
            <textarea
              value={tip.descricao}
              onChange={(e) => {
                setTip({ ...tip, descricao: e.target.value });
              }}
              id="descricao"
              name="descricao"
              placeholder="Escreva aqui o detalhamento da sua dica..."
              minLength="32"
              maxLength="512"
            />
          </div>
          <div id="divInputVideo">
            <label id="labelVideo" htmlFor="video">
              Video do Youtube
            </label>
            <input
              value={tip.video}
              onChange={(e) => {
                setTip({ ...tip, video: e.target.value });
              }}
              type="url"
              id="video"
              name="video"
              placeholder="https://suaurl.com"
            />
          </div>
          <div id="botoesForm">
            <button type="reset" id="btnLimpar">
              Limpar
            </button>
            <button type="reset" onClick={salvar} id="btnSalvar">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
