function multiplicativeAverage(array) { // using reduce
  let sum = array.reduce((acc, value) => acc * value);
  return (sum / array.length).toFixed(3);
}

function multiplicativeAverage(array) { // using basic for loop
  let sum = 1;

  for (let i = 0; i < array.length; i += 1) {
    sum *= array[i];
  }
  return (sum / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"