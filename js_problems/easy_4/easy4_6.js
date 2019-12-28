function isPalindromicNumber(num) {
  return num === Number(num.toString().split("").reverse().join(""));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

function isPalindromicNumber(num) { // further explorations
  num = num.toString(8)
  return num === num.split("").reverse().join("");
}

console.log(isPalindromicNumber(00034543))  // true // further explorations
console.log(isPalindromicNumber(002200)) // false
console.log(isPalindromicNumber(0022)) // true
console.log(isPalindromicNumber(010)) // false

// javscript transforms leading zeros followed by a digit less than 8 into octals. To 
// remove the leading zeros and turn back into digits, we need to using .toString(8).