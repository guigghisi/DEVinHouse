var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var media = (arrayNum) => {
  var soma = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    soma += arrayNum[i];
  }
  return soma / arrayNum.length;
};

console.log(media(arrayNum));
