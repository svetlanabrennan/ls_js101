function repeat(num, string) {
  new_string = ""
  
  while (num > 0) {
    new_string += string
    num -= 1;
  }
  return new_string;
}

console.log(repeat(3, "ha"));