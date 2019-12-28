const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}

function stringToInteger(string) {
  let result = 0;
  let array = string.split("");
  let newArray = array.map(str => {
    result = (10 * result) + (DIGITS[str]);
  })
  return result;
}

console.log(stringToInteger("4321"))
console.log(stringToInteger("570"))

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true