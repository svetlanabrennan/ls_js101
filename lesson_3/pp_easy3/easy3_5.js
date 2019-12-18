function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) { // solution 1
  return color === "blue" || color === "green";
}

const isColorValid = color => color === "blue" || color === "green"; // solution 2

const isColorValid = color => ["blue", "green"].includes(color); // solution 3

console.log(isColorValid("blue"));