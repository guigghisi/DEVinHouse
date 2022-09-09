export default function Filter() {
  return (
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
            onClick="pesquisaCard()"
          />
        </button>
        <button type="reset" id="btnLimparPesquisa">
          <img
            id="limparPesquisa"
            src="assets/x.png"
            height="30px"
            alt="limparPesquisa"
            onClick="colocarCardDiv()"
          />
        </button>
      </form>
    </div>
  );
}
