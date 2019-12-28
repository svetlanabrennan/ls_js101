// function doubleNumbers(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * 2;
//   }
//   return array;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];

// doubleNumbers(myNumbers);
// console.log(myNumbers);


// function doubleOddIndicies(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (i % 2 === 1) {
//       array[i] = array[i] * 2;
//     }
//   }
//   return array;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];

// doubleOddIndicies(myNumbers);
// console.log(myNumbers);


function multiply(array, num) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * num;
  }
  return array;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

multiply(myNumbers, 3);
console.log(myNumbers);
