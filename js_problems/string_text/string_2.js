function removeVowels(array) {
  return array.map(value => {
    return value.replace(/[aeiou]/gi, "")
  });
}

function removeVowels(array) { // refactored
  return array.map(value => value.replace(/[aeiou]/gi, ""));
}

function removeVowels(array) { // using looping
  return array.map(value => {
    let chrs = value.split("");
    let deletedVowels = deleteVowels(chrs)
    return deletedVowels.join("");
  });
}

function deleteVowels(array) {
  const vowels = /[aieou]/gi
  return array.map(element => {
    if (element.match(vowels)) {
      return "";
    } else {
      return element
    }
  });
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));  