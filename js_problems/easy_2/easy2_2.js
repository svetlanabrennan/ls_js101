const readline = require('readline-sync');

let name = readline.question("What is your name? ");

if (name.includes("!")) {
  name = name.slice(0, -1);
  console.log((`HELLO, ${name}. WHY ARE YOU SCREAMING?`).toUpperCase());
} else {
  console.log(`Hello ${name}`);
}