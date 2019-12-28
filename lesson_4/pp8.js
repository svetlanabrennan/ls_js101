let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let resultObj = {};

flintstones.forEach((element, index) => {
  let key = element;
  let value = index;
  resultObj[key] = value;
});

console.log(resultObj);