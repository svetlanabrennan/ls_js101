let numbers = [1, 2, 3, 4];

console.log(numbers.length = 0); // solution 1

numbers.splice(0, numbers.length); // solution 2

let numbers = []; // solution 3

while (numbers.length) { // solution 4
  numbers.pop();
}

console.log(numbers);