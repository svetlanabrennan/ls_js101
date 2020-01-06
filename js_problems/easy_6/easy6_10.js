function reverseWords(string) { //  using map
  let result = string.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  return result.join(" ");
}

function reverseWords(string) { // using for loop
  let result = [];
  let array = string.split(" ");

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= 5) {
      result.push(reverseWord(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result.join(" ");
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));  