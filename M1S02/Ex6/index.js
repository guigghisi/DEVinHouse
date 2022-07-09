var peso = prompt("Digite o seu peso");
var altura = prompt("Digite a sua altura");
var resultado = peso / (altura * altura);

if (resultado >= 25) {
  alert("Você está acima do peso, procure um médico");
} else if (resultado < 24.5 && resultado > 18.5) {
  document.write("<h3>PARABÉNS!! Você está no peso ideal<h3/>");
} else {
  document.write("<h3>Você está abaixo do peso, procure um médico.<h3/>");
}
