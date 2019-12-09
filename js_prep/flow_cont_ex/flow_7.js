function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps("Sue Smith"));
console.log(allCaps("Sue Robertson"));