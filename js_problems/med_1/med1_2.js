/*
PROBLEM
  input: two digits: a number and count (# of digits to rotate)
  output: one number: rotated number

  rules:
    1. take the last count digits from the number
    2. leave the rest of the digits as is
    3. slice off the digits from #1 and move them to the end of number
    4. join the numbers from # 2 and # 1

ALGO
  turn number into a string then into an array
  

*/

function rotateRightmostDigits(number, count) { // this worked for all counts except 1
  let array = String(number).split("");
  let element = array.slice(-count, -count + 1);
  let leftSide = array.slice(0, -count)
  let rightSide = array.slice(-count + 1)
  console.log(element);
  console.log(leftSide);
  console.log(rightSide);
  return Number(leftSide.concat(rightSide).concat(element).join(""));
}

function rotateRightmostDigits(number, count) { // course solution
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


function rotateRightmostDigits(number, count) { // using substring
  let numberString = String(number);
  let firstPart = numberString.substring(0, numberString.length - count);
  let secondPart = numberString.substring(numberString.length - count);
  let result = firstPart + secondPart.substring(1) + secondPart[0];

  return Number(result);
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));