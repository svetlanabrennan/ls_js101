function oddLengths(array) {
  let newArray = array.map((element) => {
                  return element.length;
                }).filter((num) => {
                  return (num % 2 === 1);
                });
                return newArray;
  }

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]