/*
PROBLEM 
  take a string
  alternate each character by capitalized and lowercase or non alpha character

ALGO
  split by "" and map over chrs
  even index gets capitalized
  odd index gets lowercased
  join array by ""
*/

function staggeredCase(string) {
  return string
    .split("")
    .map((chr, index) => {
      if (index % 2 === 0) {
        return chr.toUpperCase();
      } else {
        return chr.toLowerCase();
      }
    }).join("");
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));