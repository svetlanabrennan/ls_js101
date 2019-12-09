// PART 1 ===========
// Node Solution
let rlSync = require("readline-sync");

let name = rlSync.question("What is your name? ");
console.log (`Hello, ${name}!`)

// Browser solution
let name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);


// PART 2 ===========
// Node Solution
let rlSync = require("readline-sync");

let firstName = rlSync.question("What is your first name? ");
let lastName = rlSync.question("What is your last name? ");
console.log (`Hello, ${firstName} ${lastName}!`)

// Browser solution
let firstName = prompt('What is your first name? ');
let lastName = prompt('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
