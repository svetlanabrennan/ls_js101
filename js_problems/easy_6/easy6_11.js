function reverse(array) { // online solution
  for (let i = 0; i < array.length / 2; i +=1) {
    let first = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = first
  }
  return array;
}

function reverse(array) { // course solution
  let first = 0;
  let last = array.length - 1;

  while (first < array.length / 2) {
    array[first] = array[last];
    array[last] = array[first];
    first += 1;
    last -= 1;
  }
  return array
}

let list = [1, 2, 3, 4];
reverse(list);
console.log(list);

let list1 = ["a", "b", "c", "d", "e"];
reverse(list1);
console.log(list1);