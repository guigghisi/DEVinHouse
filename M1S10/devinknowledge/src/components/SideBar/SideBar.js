export default function SideBar() {
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
        <form method="post">
          <div id="divInputTitulo">
            <label for="labelTitulo">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Digite um título"
              minlength="8"
              maxlength="64"
            />
          </div>
          <div id="divInputLinguagem">
            <label for="labelLinguagem">Linguagem/Skill</label>
            <input
              type="text"
              id="linguagem"
              name="linguagem"
              placeholder="Digite uma linguagem ou skill"
              minlength="4"
              maxlength="16"
            />
          </div>
          <div id="divInputCategoria">
            <label for="labelCategoria">Categoria</label>
            <select>
              id="categoria"
              name="categoria"
              placeholder="Digite uma linguagem ou skill"
            <option value="">Selecione uma categoria</option>
            <option value="frontend">FrontEnd</option>
            <option value="backend">BackEnd</option>
            <option value="fullstack">FullStack</option>
            <option value="comportamental/soft">Comportamental/Soft</option>
            </select>
          </div>
          <div id="divInputDescricao">
            <label for="labelDescricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Escreva aqui o detalhamento da sua dica..."
              minlength="32"
              maxlength="512"
            />
          </div>
          <div id="divInputVideo">
            <label id="labelVideo" for="video">
              Video do Youtube
            </label>
            <input
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
            <button type="submit" onclick="salvar()" id="btnSalvar">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
