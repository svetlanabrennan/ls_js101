function buyFruit(array) {
  const result = array.map(subArray => {
    return Array(subArray[1]).fill(subArray[0])
  });
  return [].concat(...result);
}

// function buyFruit(array) {
//   return array.map(subarray => repeat(subarray))
//               .reduce((acc, value) => acc.concat(value));
// }

// function repeat(subArray) {
//   let result = [];
//   let fruit = subArray[0];
//   let quantity = subArray[1];

//   for (let num = 0; num < quantity; num += 1) {
//     result.push(fruit);
//   }
//   return result;
// }

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));