// function crunch(string) { // string split into array
//   array = string.split("");
//   let uniqueArray = [];
  
//   for (let i = 0; i < array.length; i += 1) {
//     if (uniqueArray[uniqueArray.length - 1] !== array[i]) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray.join("");
// }

// function crunch(string) { // without splitting string into array
//   let uniqueString = "";
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (uniqueString[uniqueString.length - 1] !== string[i]) {
//       uniqueString += string[i];
//     }
//   }
//   return uniqueString;
// }

function crunch(text) { // course solution - further explorations
  let index = 0;
  let crunchText = '';

  while (index < text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
// if you stop iteration when index equals text.length - 1 then it'll exclude the 
// last character from the loop

// function crunch(string) { // further explorations using regex
//   return string.replace(/[^\w\s]|(.)(?=\1)/g, "");
// }

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));  