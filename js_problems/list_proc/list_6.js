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

function palindromes(string) {
  let array = substrings(string).flat();
  let result = array.filter(word => {
        if ((word.length > 1) && (word === word.split("").reverse().join(""))) {
          return word
        }
      })
  console.log(result);
}

palindromes('madam');  
palindromes('abcd');    
palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');