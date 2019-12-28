function twice(num) {
  if (checkDoubled(num)) {
    return num;
  } else {
    return num * 2
  }
}

function checkDoubled(num) {
  let string = num.toString();
  let center = Math.floor(string.length / 2);
  let left = string.substring(0, center);
  let right = string.substring(center);

  return left === right;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676