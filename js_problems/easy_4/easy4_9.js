function wordSizes(string) { // solution 1
  let array = string.replace(/[^a-z0-9\s]/gi, "").split(" ");
  let object = {};

  array.forEach(element => {
    let length = element.length;

    if (object[length] === 0) return;

    object[length] ? object[length] += 1 : object[length] = 1

  });
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));  