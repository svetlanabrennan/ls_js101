let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj)

let result = objKeys.map(function(key) {
  return key.toUpperCase();
});

console.log(result)
console.log(obj)