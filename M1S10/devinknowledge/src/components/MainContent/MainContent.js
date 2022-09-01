
import Summary from "../Summary/Summary";


export default function MainContent() {
  return (
    <div id="cards">
      <Summary />
      <div id="pesquisa">
      <form method="post">
        <input
          type="text"
          id="inputPesquisa"
          placeholder="Digite um título para buscar..."
        />
        <button type="button" id="btnPesquisa">
          <img
            id="lupa"
            src="assets/lupa.png"
            height="45px"
            alt="lupa"
            onclick="pesquisaCard()"
          />
        </button>
        <button type="reset" id="btnLimparPesquisa">
          <img
            id="limparPesquisa"
            src="assets/x.png"
            height="30px"
            alt="limparPesquisa"
            onclick="colocarCardDiv()"
          />
        </button>
      </form>
    </div>
      <div id="cardDicas">
        <div id="modeloCard">
          <div id="tituloCard">
            <p>Título</p>
          </div>
          <div id="linguagemCard">
            <p>
              <strong>Linguagem/Skill: </strong>
            </p>
          </div>
          <div id="categoriaCard">
            <p>Categoria</p>
          </div>
          <div id="descricaoCard">
            <p>Descrição</p>
          </div>
          <div id="botoesCard">
            <div id="divBtnVideo">
              <button type="button" id="btnVideo">
                <img
                  id="iconeVideo"
                  src="assets/video.png"
                  height="30px"
                  alt="iconeVideo"
                />
              </button>
            </div>
            <div id="divBtnEditar">
              <button type="button" id="btnEditar">
                <img
                  id="iconeEditar"
                  src="assets/editar.png"
                  height="30px"
                  alt="iconeEditar"
                />
              </button>
            </div>
            <div id="divBtnExcluir">
              <button type="button" id="btnExcluir">
                <img
                  id="iconeLixeira"
                  src="assets/lixeira.png"
                  height="30px"
                  alt="iconeLixeira"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
