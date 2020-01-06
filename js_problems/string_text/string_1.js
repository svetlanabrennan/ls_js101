function isUppercase(string) { // using .every
  return string.split("").every(allCapital);
}

const allCapital = (currentValue) => currentValue === currentValue.toUpperCase();


function isUppercase(string) { // using ===
  return string === string.toUpperCase();
}


function isUppercase(string) { // using .test
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));
console.log(isUppercase('T'))
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase('')); 