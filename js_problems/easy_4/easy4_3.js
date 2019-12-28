readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retireAge = readline.question("At what age would you like to retire? ");
let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will require in ${currentYear + (retireAge - age)}.`)
console.log(`You have only ${retireAge - age} years of work to go!`);

// further explorations:
// If you remove "new" from the today variable, it'll return a string rather than a date
// object which means our currentYear variable would throw an error. 