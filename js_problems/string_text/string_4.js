function wordCap(string) {
  return string.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCases();
  }).join(" ");
}

function wordCap(string) { // refactored
  return string
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCae())
    .join(" ");
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); 