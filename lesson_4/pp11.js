let statement = "The Flintstones Rock";

// create an array
// assign each chr to be a key using for Each
// is there a count or frequency method in Math to count the chrs in array?

let array = statement.split("").filter(chr => chr !== " ");
let freqObj = {};

array.forEach(chr => {
  freqObj[chr] = freqObj[chr] || 0;
  freqObj[chr] += 1;
});

console.log(freqObj);