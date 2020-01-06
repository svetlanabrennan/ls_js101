function sequence(num) {
  let result = [];

  for (let i = 1; i <= num; i += 1) {
    result.push(i);
  }
  return result;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));