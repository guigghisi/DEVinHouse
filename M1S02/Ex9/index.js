var produtos = [];
do {
  var opcao = prompt(
    "Qual produto você deseja comprar?\n(1) Hortifruti\n(2) Laticínios\n(3) Carnes\n(4) Peixes\n(5) Aves\n(6) Fechar pedido"
  );
  switch (opcao) {
    case "1":
      var quantidade = prompt(
        "Digite a quantidade de hortifruti que deseja comprar"
      );
      produtos.push("Hortifruti:" + quantidade);
      break;
    case "2":
      var quantidade = prompt(
        "Digite a quantidade de laticínios que deseja comprar"
      );
      produtos.push("Laticínios:" + quantidade);
      break;
    case "3":
      var quantidade = prompt(
        "Digite a quantidade de carnes que deseja comprar"
      );
      produtos.push("Carnes:" + quantidade);
      break;
    case "4":
      var quantidade = prompt(
        "Digite a quantidade de peixes que deseja comprar"
      );
      produtos.push("Peixes:" + quantidade);
      break;
    case "5":
      var quantidade = prompt("Digite a quantidade de aves que deseja comprar");
      produtos.push("Aves:" + quantidade);
      break;
    case "6":
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao != 6);
var maior = 0;
var produtoMaior = "";
for (var i = 0; i < produtos.length; i++) {
  var produto = produtos[i].split(":");
  var quantidade = parseInt(produto[1]);
  if (quantidade > maior) {
    maior = quantidade;
    produtoMaior = produto[0];
  }
}
alert(
  "O produto mais vendido foi " + produtoMaior + " com " + maior + " unidades"
);
