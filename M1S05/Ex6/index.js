var imprimeTabuada = (numero) => {
  for (var i = 0; i <= 10; i++) {
    console.log(numero * i);
  }
};
tabuada = (numero, func) => {
  for (var i = 0; i <= numero; i++) {
    func(i);
  }
};

tabuada(10, imprimeTabuada);
