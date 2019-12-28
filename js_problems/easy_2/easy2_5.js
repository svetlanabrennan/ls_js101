const readline = require("readline-sync");

let numOne = Number(readline.question("Enter the first number: "));
let numTwo = Number(readline.question("Enter the second number: "));

console.log(`${numOne} + ${numTwo} = ${numOne + numTwo}`);
console.log(`${numOne} - ${numTwo} = ${numOne - numTwo}`);
console.log(`${numOne} * ${numTwo} = ${numOne * numTwo}`);
console.log(`${numOne} / ${numTwo} = ${numOne / numTwo}`);
console.log(`${numOne} % ${numTwo} = ${numOne % numTwo}`);
console.log(`${numOne} ** ${numTwo} = ${numOne ** numTwo}`);