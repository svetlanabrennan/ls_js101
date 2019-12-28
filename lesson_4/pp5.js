[1, 2, 3].every(num => {
  return num = num * 2;
});

// callback's return value is 2, 4, 6 and the return value of .every method is 
// true since the callback function evaluates to truthy for each element