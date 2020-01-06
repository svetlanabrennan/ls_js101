function multiplyAllPairs(array1, array2) {
  let result = [];
  array1.forEach(element => {
    array2.forEach(num => {
      result.push(element * num);
    });
  });
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));  