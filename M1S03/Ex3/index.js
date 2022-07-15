//Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ex3(array) {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return [pares, impares];
}

console.log(
  "A qunatidade informada foi " +
    array.length +
    ", a de valores pares foi " +
    ex3(array)[0] +
    " e a de valores impares foi " +
    ex3(array)[1]
);
