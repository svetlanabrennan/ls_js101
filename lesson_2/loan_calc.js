const readline = require('readline-sync');
const MESSAGES = require('./loan_calc_msgs.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === "" ||
         Number(number) <= 0 ||
         Number.isNaN(Number(number));
}

function invalidApr(number) {
  return number.trim() === "" ||
  Number(number) < 0 ||
  Number.isNaN(Number(number));
}

function calculateMonthlyApr(apr) {
  return (Number(apr) / 100) / 12;
}

function calcPayment(amount, monthApr, length) {
  if (monthApr === 0) {
    return Number(amount) / Number(length);
  } else {
    return Number(amount) * monthApr /
               (1 - Math.pow((1 + monthApr),(-Number(length))));
  }
}

// START PROGRAM

prompt(MESSAGES["welcome"]);

while (true) {
  prompt(MESSAGES["loanAmount"]);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES["invalidLoan"]);
    loanAmount = readline.question();
  }

  prompt(MESSAGES["annualApr"]);
  let annualApr = readline.question();

  while (invalidApr(annualApr)) {
    prompt(MESSAGES["invalidApr"]);
    annualApr = readline.question();
  }

  let monthlyApr = calculateMonthlyApr(annualApr);

  prompt(MESSAGES["loanDuration"]);
  let monthlyDuration = readline.question();

  while (invalidNumber(monthlyDuration)) {
    prompt(MESSAGES["invalidDuration"]);
    monthlyDuration = readline.question();
  }

  let monthlyPayment = calcPayment(loanAmount, monthlyApr, monthlyDuration);

  prompt(`For a $${Number(loanAmount).toFixed(2)} loan with a ${annualApr}% APR,
  your monthly payment is $${Number(monthlyPayment).toFixed(2)}.`);

  prompt(MESSAGES["anotherCalc"]);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt(MESSAGES["invalidAnswer"]);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") break;
}

prompt(MESSAGES["thankYou"]);