function average(array) {
  let sum = array.reduce((previous, current) => {
    return previous + current;
  });
  return Math.floor(sum / array.length);
}

function average(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element
  });
  return Math.floor(sum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40