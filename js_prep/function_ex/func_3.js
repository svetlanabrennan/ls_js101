function getNumber(prompt) {
  let readlineSynce = require("readline-sync");
  let num = readlineSynce.question(prompt);
  return num;
};

let firstNum = getNumber("What is the firs number? ");
let secondNum = getNumber("What is the second number? ");
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);