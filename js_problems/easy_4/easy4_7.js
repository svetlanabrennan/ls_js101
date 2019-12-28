/*
PROBLEM:
  take an array of numbers
  return an array with same number of elements but with value being the running total 
  from the original array

  input: array
  output: array

ALGO
  create a new array
  create a sum variable
  using maps iternation
  move current element plus sum into new array
  return array
*/

function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  array.map(element => {
    sum += element
    resultArray.push(sum)
  })

  return resultArray;
}


let runningTotal = function(array) { // further explorations user's solution
  return array.slice(1).reduce((passedIn, item) => {
    console.log(passedIn, item);
    return passedIn.concat(item + passedIn[passedIn.length - 1])
  }, array.slice(0, 1));
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]))
console.log(runningTotal([]))