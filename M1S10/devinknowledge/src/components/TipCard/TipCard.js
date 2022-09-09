export default function TipCard({
  titulo,
  linguagem,
  categoria,
  descricao,
  video,
}) {
  return (
    <div id="modeloCard">
      <div id="tituloCard">
        <p>{titulo}</p>
      </div>
      <div id="linguagemCard">
        <p>
          <strong>Linguagem/Skill: {linguagem}</strong>
        </p>
      </div>
      <div id="categoriaCard">
        <p>Categoria: {categoria}</p>
      </div>
      <div id="descricaoCard">
        <p>Descrição</p>
        <p>{descricao}</p>
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
  );
}
