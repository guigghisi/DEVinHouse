function botaoAdicionar() {
  if (document.getElementById("texto").value === "") {
    alert("Digite algo");
  } else {
    const listaPrincipal = document.getElementsByTagName("body")[0];
    const item = document.createElement("h3");
    item.innerHTML += `${document.getElementById("texto").value}`;
    listaPrincipal.appendChild(item);
    document.getElementById("texto").value = "";
  }
}

function botaoSalvar() {
  if (document.getElementById("texto").value === "") {
    alert("Digite algo");
  } else {
    localStorage.setItem("texto", document.getElementById("texto").value);
  }
}
function botaoMostrar() {
  if (localStorage.getItem("texto") === null) {
    alert("Não há nada salvo");
  } else {
    const body = document.getElementsByTagName("body")[0];
    const texto = localStorage.getItem("texto");
    const item = document.createElement("h3");
    item.innerHTML += `${texto}`;
    body.appendChild(item);
  }
}
