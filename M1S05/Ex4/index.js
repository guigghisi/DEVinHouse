var arrayNum = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
var numPositivos = (arrayNum) => {
  var arrayAux = [];
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] >= 0) {
      arrayAux.push(arrayNum[i]);
    }
  }
  return arrayAux;
};

console.log(numPositivos(arrayNum));
