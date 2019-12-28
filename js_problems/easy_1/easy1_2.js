for (let count = 1; count < 100; count += 2) {  // solution 1
  console.log(count);
}

const readline = require('readline-sync'); // further explorations
let limit = readline.question("Enter a limit of odd numbers? ")

for (let count = 1; count < limit; count += 2) {  // solution 1
  console.log(count);
}