function union(arrayOne, arrayTwo) { // using online solution
  let newArray = arrayOne.concat(arrayTwo);
  let unique = newArray.filter((value, index, self) => {
    return self.indexOf(value) === index
  });
  return unique;
}

function union(arrayOne, arrayTwo) { // using basic loop solution
  let newArray = arrayOne.concat(arrayTwo).sort();
  let unique = [];

  for (let i = 0; i < newArray.length; i += 1) {
    if (newArray[i] === unique[unique.length - 1]) continue;
    unique.push(newArray[i]);
  }
  return unique;
}

function union(arrayOne, arrayTwo) { // using basic loop solution
  let newArray = arrayOne.concat(arrayTwo).sort();
  let unique = [];

  newArray.forEach(element => {
    if (element === unique[unique.length - 1]) return;
    unique.push(element);
  })
  return unique;
}

function union(arrayOne, arrayTwo) { // using course solution 3
  return [...new Set([...arrayOne, ...arrayTwo])];
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]