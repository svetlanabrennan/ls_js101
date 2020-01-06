/*
PROBLEM:
  takes two integers as arguments
  first argument is count
  second argument is the starting number
  return an array the length of count
  each element should be a multiple of staring number

*/

function sequence(count, startNum) {
  let result = [];

  for (let i = 1; i <= count; i += 1) {
    result.push(i * startNum);
  }
  return result;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000)); 