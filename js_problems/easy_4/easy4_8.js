/*
PROBLEM
  function that takes a string consisting of zero or more space separated words
  returns an object that shows a number of words of different sizes
    key is size of string
    value is count of that string size

INPUT: string
OUTPUT: object

ALGO
  split string into array at the space
  initialize a new empty object
  use a forEach loop 

*/

function wordSizes(string) { // solution 1
  let array = string.split(" ");
  let object = {};

  array.forEach(element => {
    let length = element.length;

    if (object[length] === 0) return;

    object[length] ? object[length] += 1 : object[length] = 1

  });
  return object;
}

function wordSizes(string) { // solution 2
    let array = string.split(" ");
    let object = {};

    for (let i = 0; i < array.length; i += 1) {
      let length = array[i].length;
      if (length === 0) {
        continue;
      }

      if (object[length]) {
        object[length] += 1;
      } else {
        object[length] = 1;
      }
    }
    return object
}

console.log(wordSizes('Four score and seven.')); 
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));     