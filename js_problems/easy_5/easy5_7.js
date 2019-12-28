/* 
PROBLEM
  takes two arrays with a list of numbers
  returns a new array contains the product of each pair of numbers 
  from the argument that have the same index. 

INPUT: two arrays
OUTPUT: one array

ALGO
  create an empty array
  create a for loop
  multiply element at the same index at both arrays
  and push to empty array
  return empty array
*/

function multiplyList(array1, array2) {
  let sum = [];

  for (let i = 0; i < array1.length; i += 1) {
    sum.push(array1[i] * array2[i]);
  }
  return sum;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
