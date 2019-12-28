// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function getRandomIntInclusive(...args) {
  let [min, max] = args.sort((a, b) => a - b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = getRandomIntInclusive(120, 20);
console.log(`Teddy is ${age} years old!`);