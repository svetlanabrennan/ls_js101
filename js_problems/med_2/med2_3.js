function triangle(num1, num2, num3) {
  let array = [num1, num2, num3];

  if (invalid(array)) {
    return "invalid";
  } else {
    return (measureAngles(array));
  }
}

function invalid(array) {
  return (array.some(num => num === 0)) || array.reduce((prev, sum) => prev + sum) !== 180;
}

function measureAngles(array) {
  let [side1, side2, side3] = array;
  if (array.every(num => num < 90)) {
    return "acute";
  } else if (array.some(num => num === 90)) {
    return "right";
  } else {
     return "obtuse";
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"