/* 

PROBLEM: ask user for integer > 0, ask user for sum or product of all numbers
between 1 and the number they entered

if sum: add all numbers between 1 and number
if product: multiply all numbers between 1 and number

INPUT: integer and string
OUTPUT: string with integers

ALGO: 
  ask user for input via readline

  write for function with for loops on sum and product of nums
  write if statement and call functions
*/

const readline = require("readline-sync");

function calcSum(num) {
  let total = 0;

  for (let start = 1; start <= integer; start += 1) {
    total += start;
  }
  return total;
}

function calcProduct(num) {
  let total = 1;

  for (let start = 1; start <= integer; start += 1) {
    total *= start;
  }
  return total;
}

function invalidNumber(num) {
  return Number.isNaN(Number(num)) || num === "" || Number(num) === 0;
}

function invalidOperation(input) {
  return input !== "s" && input !== "p";
}

// START PROGRAM 

let integer = readline.question("Please enter an integer greater than 0: ");

while (invalidNumber(integer)) { // returns false if number is valid
  console.log("Invalid number. Try again!");
  integer = readline.question();
}

integer = Number(integer);

let operation = readline.question("Enter \"s\" to compute the sum or \"p\" to compute the problem. ").toLowerCase();

while (invalidOperation(operation)) { // returns false if operation is valid
  console.log("Invalid operation. Enter \"s\" or \"p\".");
  operation = readline.question().toLowerCase();
}

if (operation === "s") {
  let sum = calcSum(integer);
  console.log(`The sum of integers between 1 and ${integer} is ${sum}.`);
} else if (operation === "p") {
  let product = calcProduct(integer);
  console.log(`The product of integers between 1 and ${integer} is ${product}.`);
} else {
  console.log("Invalid operation!");
}



// FURTHER EXPLORATIONS

function calcSum(num) {
  let total = 0;

  total = num.reduce((a, b) => {
    return a + b
  });
  return total;
}

function calcProduct(num) {
  let total = 1;

  total = num.reduce((a, b) => {
    return a * b
  });
  return total;
}

function invalidOperation(input) {
  return input !== "s" && input !== "p";
}

// START PROGRAM

let integer = readline.question("Please enter some integers greater than 0 separated by a comma: ");

array = integer.split(',')

integer = array.map(num => {
  return Number(num);
});

let operation = readline.question("Enter \"s\" to compute the sum or \"p\" to compute the problem. ").toLowerCase();

while (invalidOperation(operation)) { // returns false if operation is valid
  console.log("Invalid operation. Enter \"s\" or \"p\".");
  operation = readline.question().toLowerCase();
}

if (operation === "s") {
  let sum = calcSum(integer);
  console.log(`The sum of integers between 1 and ${integer} is ${sum}.`);
} else if (operation === "p") {
  let product = calcProduct(integer);
  console.log(`The product of integers between 1 and ${integer} is ${product}.`);
} else {
  console.log("Invalid operation!");
}