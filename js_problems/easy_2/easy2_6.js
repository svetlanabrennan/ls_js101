function penultimate(string) {
  let array = string.split(" ");
  return array[array.length -2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function middleWord(string) { // further explorations
  if ((string === "") || (string === " ")) {
    return "string is empty"
  } else {
    array = string.split(" ");
    return array[Math.floor((array.length - 1)/ 2)]
  }
}

console.log(middleWord(" "));
console.log(middleWord("This is a test word"));
console.log(middleWord("Even number of words"));
console.log(middleWord("word"));