/* 
input: array
output: new array

rules:
  if input is not an array, return undefined
  if input is an empty array, return an empty array
  can't modify the original array
  for a non empty array, slice off the first element in the array and move to the end of array
ALGO

*/

function rotateArray(array) { // solution 1
  if (typeof array !== "object") {
    return undefined
  } else if (array.length === 0) {
    return [];
  }

  let newArray = array.slice();
  let element = newArray.reverse().pop();
  newArray.reverse().push(element);
  return newArray;
}

function rotateArray(array) { // solution 2
  if (typeof array !== "object") {
    return undefined
  } else if (array.length === 0) {
    return [];
  }

  let result = array.slice(1).concat(array.slice(0, 1))
  return result;
}

function rotateArray(array) { // solution 2 refactored
  if (!Array.isArray(array)) {
    return undefined
  } else if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array.slice(0, 1))
}

let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);       

console.log(rotateArray()); 
console.log(rotateArray(1));   
console.log(rotateArray([]));   