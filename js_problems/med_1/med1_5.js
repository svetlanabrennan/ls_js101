/*
PROBLEM
  input: string
  output: same string

  rules:
    convert number words to digit characters
*/

let obj = {
  zero: 0,
  one: 1, 
  two: 2, 
  three: 3, 
  four: 4, 
  five: 5, 
  six: 6, 
  seven: 7, 
  eight: 8,
  nine: 9
}

function wordToDigit(string) {
  
  Object.keys(obj).forEach(word => {
    let regex = new RegExp("\\b" + word + "\\b", "g");
    console.log(string);
    string = string.replace(regex, obj[word]);
  });
  return string;
}

function wordToDigit(string) { // further explorations
  return string.replace(/\b(\w+)\b/g, (word) => {
    return Object.keys(obj).includes(word) ? obj[word] : word;
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done.'));