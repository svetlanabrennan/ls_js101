function sumOfSums(array) { // using forEach
  let sum = 0;
  array.forEach((_, index) => {
    sum += array.slice(0, index + 1).reduce((acc, value) => acc + value, 0);
    });
  return sum;
}

function sumOfSums(array) { // using for loop

  for (let i = 0; i < array.length; i += 1) {
    sum += array.slice(0, i + 1).reduce((arr, value) => arr + value);
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));  
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));