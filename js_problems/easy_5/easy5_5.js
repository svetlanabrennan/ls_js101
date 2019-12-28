function interleave(array1, array2) { // basic looping
  newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  return newArray;
}

function interleave(array1, array2) { // refactored
  newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i], array2[i]);
  }
  return newArray;
}

function interleave(array1, array2) { // using forEach
  let newArray = [];

  array1.forEach((element, index) => {
    newArray.push(element, array2[index]);
  });
  return newArray;
}


function interleave(array1, array2) { // using map
  let newArray = [];

  array1.map((element, index) => {
    newArray.push(element, array2[index]);
  });
  return newArray;
}

function interleave(array1, array2) { // using reduce and concat
  return array1.reduce((acc, cur, idx) => {
    console.log(acc, cur, idx)
    return acc.concat(cur, array2[idx])
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));