var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ePar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function eImpar(num) {
  if (num % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

function verificaNumero(array, func) {
  var arrayAux = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      arrayAux.push(array[i]);
    }
  }
  return arrayAux;
}

console.log(verificaNumero(arrayNum, ePar));
console.log(verificaNumero(arrayNum, eImpar));
