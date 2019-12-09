function last(array) {
  return array[array.length - 1];
}

console.log(last(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(last([]));

// an empty array would return undefined.