/*

PROBLEM: takes an integer and returns true if number's absolute value is odd

INPUT: integer (positive, negative or zero)

OUTPUT: true or false

DATA: Use if statement with a remainder operator

*/

function isOdd(integer) {
  if (Math.abs(integer) % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function isOdd(integer) { // refactored
  return Math.abs(integer) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true