export default function MainContent() {
  return (
    <div id="cards">
      <div id="indicativos">
        <div id="indicativoTotal">
          <p>Total</p>
          <p id="total">0</p>
        </div>
        <div id="indicativoFrontEnd">
          <p>FrontEnd</p>
          <p id="frontEnd">0</p>
        </div>
        <div id="indicativoBackEnd">
          <p>BackEnd</p>
          <p id="backEnd">0</p>
        </div>
        <div id="indicativoFullStack">
          <p>FullStack</p>
          <p id="fullStack">0</p>
        </div>
        <div id="indicativoSoftSkill">
          <p>SoftSkill</p>
          <p id="softSkill">0</p>
        </div>
      </div>
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
