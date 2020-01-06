function substringsAtStart(string) {
  let result = [];
  string.split("").forEach((chr, idx) => {
    result.push(string.substring(0, idx + 1));
  });
  return result;
}

function substrings(string) {
  let array = [];
  
  for (let i = 0; i < string.length; i += 1) {
    array.push(substringsAtStart(string.substring(i)));
  }
  return array;
}

console.log(substrings('abcde'));