// calculate monthly apr STOPPED HERE

// ask for loan duration 
// validate duration: enter as months or year?
// save loan duration
// calculate loan duration in months

// refactor messages into .json file
// run program through lint
// should we return to user what they entered for amount, apr and duration?
// should most code be extracted to functions

// loan formula: let m = p * (j / (1 - Math.pow((1 + j),(-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function zeroApr(number) {
  return Number(number) === 0;
}

// START PROGRAM

prompt("Welcome to the Loan Calculator!");

prompt("What is the loan amount in dollars?");
let amount = readline.question();

while (invalidNumber(amount)) {  // false means it's a valid number
  prompt("Invalid loan amount. Try again!");
  amount = readline.question();
}

prompt("What is the Annual Percentage Rate (APR)? \n Example: Enter 5 for 5%");
let annualApr = readline.question();

while (invalidNumber(annualApr)) {  // false means it's a valid number
  prompt("Invalid APR amount. Try again!");
  annualApr = readline.question();
}

while (zeroApr(annualApr)) {
  prompt("APR can't be zero. Try again!");
  annualApr = readline.question();
}

prompt("What is the loan duration in months?");