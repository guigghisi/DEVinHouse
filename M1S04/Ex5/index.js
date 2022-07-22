let array1 = [1, 3, 4, 5, 3, 7];
let array2 = [1, 2, 6, 4, 8, 5];

let array3 = array1.concat(array2);

let array4 = array3.filter(function (item, index) {
  return array3.indexOf(item) === index;
});

let array5 = array4.sort(function (a, b) {
  return a - b;
});

console.log(array5);
