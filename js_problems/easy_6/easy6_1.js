function repeater(string) { // using for/in
  let result = "";
  for (let chr in string) {
    result += string[chr] + string[chr];
  }
  return result;
}

function repeater(string) { // using map
  return string.split("").map(chr => chr = chr + chr).join("");
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));  