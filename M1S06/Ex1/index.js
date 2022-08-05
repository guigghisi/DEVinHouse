var nome = prompt("Digite seu nome");
var sobrenome = prompt("Digite seu sobrenome");
var idade = prompt("Digite sua idade");

var resultado = `Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${
  2022 - idade
} .`;
console.log(resultado);
