function centerOf(string) {
  let center = Math.floor(string.length / 2);
  if (string.length % 2 === 1) { // if it's odd
    return string[center]
  } else {
    return string.substr(center - 1, 2);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x')); 