function halvsies(array) { // inital solution
  let firstHalf = [];
  let secondHalf = [];
  if (array.length % 2 === 1) {
    firstHalf = array.slice(0, Math.ceil(array.length/ 2));
    secondHalf = array.slice(Math.ceil(array.length/ 2))
  } else {
    firstHalf = array.slice(0, Math.floor(array.length/ 2));
    secondHalf = array.slice(Math.ceil(array.length/ 2))
  }
  return [firstHalf, secondHalf];
}

function halvsies(array) { // refactored
  let half = Math.ceil(array.length / 2);
  firstHalf = array.slice(0, half);
  secondHalf = array.slice(half)
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3])); 
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));  