function substringsAtStart(string) {
  let result = [];
  string.split("").forEach((chr, idx) => {
    result.push(string.substring(0, idx + 1));
  });
  return result;
}

console.log(substringsAtStart('abc'));
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));   