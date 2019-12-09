let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city, object) {
  let i;

  for (i = 0; i < object.length; i += 1) {
    if (object[i] === city) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
