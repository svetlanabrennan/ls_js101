let string = "The Flintstones Rock!";

for (let i = 0; i < 10; i +=1) { // my solution
  console.log(string.padStart(i + string.length));
}

for (let padding = 1; padding <= 10; padding++) { // course solution
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}