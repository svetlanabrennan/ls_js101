function negative(num) { // solution 1
  return num >= 0 ? num / -1 : num
}

function negative(num) { // solution 1
  return num >= 0 ? - num : num
}

function negative(num) { // course solution
  return Math.abs(num) * -1;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));