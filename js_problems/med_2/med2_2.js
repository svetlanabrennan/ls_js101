function triangle(num1, num2, num3) { // initial solution
  let array = [num1, num2, num3];

  array.sort((a, b) => {
    return a - b;
  });

  let side1 = array[0]
  let side2 = array[1]
  let side3 = array[2]

  if (array.some(x => x === 0)) {
    return "invalid"
  } else if ((side1 + side2) <= side3) {
    return "invalid";
  } else if ((side1 === side2) && (side1 === side3) && (side2 === side3)) {
    return "equilateral";
  } else if ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) {
    return "scalene";
  } else if (((side1 === side2) && (side1 !== side3)) || 
    ((side1 === side3) && (side1 !== side2)) || ((side2 === side3) && (side2 !== side1))) {
      return "isosceles";
    }
}

function triangle(num1, num2, num3) { // initial solution refactored
  let array = [num1, num2, num3];

  array.sort((a, b) => {
    return a - b;
  });

  let [shortest, middle, longest] = array

  if (invalid(array)) {
    return "invalid"
  } else {
    return measureSides(shortest, middle, longest);
  }
}

function invalid(array) {
  return (array.some(x => x === 0) || ((array[0] + array[1]) <= array[2]));
}

function measureSides(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 == side3) {
    return "isosceles";
  } else {
    return "scalene"
  }
}


console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));