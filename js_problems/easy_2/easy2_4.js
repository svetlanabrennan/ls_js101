function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num)
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

function squarePower(num, power) { // further explorations
  let result = num;

  for (let i = 1; i < power; i += 1) {
    result = multiply(result, num)
  }

  return result;
}

console.log(squarePower(2, 10));