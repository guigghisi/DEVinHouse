verificaNumero = (numero) => {
  const validaPar = new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve(`O número ${numero} é par`);
    } else {
      reject(`O número ${numero} é impar`);
    }
  });
  validaPar
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((resultado) => {
      console.log(resultado);
    });
};
verificaNumero(10);
