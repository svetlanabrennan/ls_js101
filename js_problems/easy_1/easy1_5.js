const readline = require("readline-sync");

let billAmount = readline.question("What is the bill amount? ");
let tipRate = readline.question("What is the tip percentage? ");

billAmount = Number(billAmount);
tipRate = Number(tipRate);

let tipAmount = billAmount * (tipRate / 100)
let total = (billAmount + tipAmount)

console.log(`The tip is $${tipAmount.toFixed(2)}`)
console.log(`The total is $${total.toFixed(2)}`)