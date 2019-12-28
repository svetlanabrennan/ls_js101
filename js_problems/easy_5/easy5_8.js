function digitList(num) {
  let array = num.toString().split("");
  return array.map(element => Number(element));
}

function digitList(num) {
  let array = num.toString().split("");
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(Number(array[i]));
  }
  return newArray;
}

console.log(digitList(12345));
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));    