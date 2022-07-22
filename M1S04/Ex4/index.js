var array = ["a", "b", "c", "d", "e"];

document.getElementById("btn").addEventListener("click", removeArray);

function removeArray() {
  let item = document.getElementById("texto").value;
  if (item == "") {
    alert("Preencha o campo");
  } else if (array.includes(item)) {
    array.splice(array.indexOf(item), 1);
  }
  document.getElementById("texto").value = "";
  console.log(array);
}
