/*
PROBLEM
  Given a string, swap the first and last letter of every word

INPUT: string
OUTPUT: string

ALGO
  split string into an array
  iterate through array with map
    combine the following: 
      let first = element[element.length - 1]
      let middle = element.slice(1, element.length - 2)
      let last = element[0]
      first + middle + last
*/ 

function swap(string) {
  let result = string.split(" ").map(element => {

    let first = element[element.length - 1]
    let middle = element.slice(1, element.length - 1)
    let last = element[0]

    if (element.length === 1) {
      return element;
    } return first + middle + last
  });

  return result.join(" ");
}

function swap(string) { // refactored slightly
  return string
    .split(" ")
    .map(element => {

      let first = element[element.length - 1]
      let middle = element.slice(1, element.length - 1)
      let last = element[0]

      if (element.length === 1) return element;
      return first + middle + last
  })
    .join(" ");
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));