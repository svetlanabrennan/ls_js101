function countOccurrences(array) {
  let result = {};
  array.forEach(word => {
    result[word] = result[word] || 0
    result[word] += 1;
  })
  displayOccurrences(result);
}

function countOccurrences(array) { // further explorations
  let result = {};
  array.forEach(word => {
    result[word.toLowerCase()] = result[word.toLowerCase()] || 0
    result[word.toLowerCase()] += 1;
  })
  displayOccurrences(result);
}

function displayOccurrences(object) {
  for (let obj in object) {
    console.log(obj + " => " + String(object[obj]));
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck', "suv"];

countOccurrences(vehicles);