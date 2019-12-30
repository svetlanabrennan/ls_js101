let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subArray => {
  subArray.sort((a, b) => {
    return a - b;
  })
})

console.log(arr) // STOPPED HERE