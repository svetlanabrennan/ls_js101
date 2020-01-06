function doubleConsonants(string) {
  let result = "";
  for (chr in string) {
    if (string[chr].match(/[aeiou]/)) {
      result += string[chr];
    } else {
      result += string[chr] + string[chr];
    }
  }
  return result;
}

function doubleConsonants(string) {
  let result = [];
  let CONSONANTS = /[a-d-f-h-j-n-p-t-v-z]/gi

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(CONSONANTS)) {
      result.push(string[i] + string[i]);
    } else {
      result.push(string[i])
    }
  }
  return result.join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));    