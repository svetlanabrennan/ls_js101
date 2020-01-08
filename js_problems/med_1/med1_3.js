/*
RULES
  1. move first digit to the end of number
  2. keep the next digit in place
  3. move the next (3rd) digit to end of number
  4, keep the next digit in place (4th)
  5. move th next (5th) digit to the end of number
  6. keep the next digit in place (6th)
  7. move the next (7th) digit to end of number
  8. keep the next digit inplace (8th)
  9. move the next (9th) digit to end of number
*/

function rotateRightmostDigits(number, count) { // course solution
  console.log(number)
  console.log(count)
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  console.log(`this is the first part ${firstPart}`);
  console.log(`this is the second part ${secondPart}`);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
 let numString = String(number).length;

  for (let count = numString; count >= 2; count -=1 ) {
    number = rotateRightmostDigits(number, count);
    //console.log(number);
  }
  return number;
}

console.log(maxRotation(735291));
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); 