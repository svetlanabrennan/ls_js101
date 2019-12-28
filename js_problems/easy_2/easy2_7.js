function xor(argument1, argument2) { // initial solution
  if (argument1 === argument2) {
    return false;
  } else {
    return true;
  }
}

function xor(argument1, argument2) { // course solution
  if ((argument1 && !argument2) || (argument1 && !argument2)) {
    return true
  } else {
    return false
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);