function sum(num) { // solution 1
  let sum = 0;

  num.toString().split("").forEach(chr => {
    sum += Number(chr);
  });
  return sum;
}

function sum(num) { // solution 2
  return String(num).split("").reduce((a, b) => Number(a) + Number(b));
}

console.log(sum(23));
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45)