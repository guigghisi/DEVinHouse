const listaPrincipal = document.getElementsByTagName("ul")[0];

function colocarItem() {
  const item = document.createElement("li");
  if (document.getElementById("texto").value === "") {
    alert("Digite algo");
  } else {
    item.innerHTML += `${document.getElementById("texto").value}`;
    listaPrincipal.appendChild(item);
    document.getElementById("texto").value = "";
  }
}
