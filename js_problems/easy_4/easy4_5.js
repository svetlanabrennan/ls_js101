function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return string === string.split("").reverse().join("");
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam')); 
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
