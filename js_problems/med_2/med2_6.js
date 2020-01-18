/*
  PROBLEM
    difference between square of the sum of the first count positive integers
    and the sum of the square of the first count positive integers. 

    add the count then square
    square every count then add
    find the difference between the two
*/

function sumSquareDifference(num) { // initial solution
  let sumSquare = 0;
  for (let i = 1; i <= num; i += 1) {
    sumSquare += i;
  }
  sumSquare **= 2
  
  let squareSum = 0;
  for (let i = 1; i <= num; i += 1) {
    squareSum += i**2
  }
  return sumSquare - squareSum;
}

function sumSquareDifference(num) { // refactored
  let sum = 0;
  sumSquare = 0;

  for (let i = 1; i <= num; i += 1) {
    sum += i
    sumSquare += Math.pow(i, 2);
  }
  return Math.pow(sum, 2) - sumSquare;
}

console.log(sumSquareDifference(3)); 
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));