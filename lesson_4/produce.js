let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let result = {};
  objKeys = Object.keys(obj);
 
  for (let i = 0; i < objKeys.length; i += 1) {

    if (obj[objKeys[i]] === "Fruit") {
      result[objKeys[i]] = obj[objKeys[i]];
    }
  }
  return result;
}

console.log(selectFruit(produce));
console.log(produce);