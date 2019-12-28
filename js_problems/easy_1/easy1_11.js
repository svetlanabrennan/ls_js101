function asciiValue(string) {
  let total = 0

  for (index = 0; index <= string.length - 1; index +=1) {
    total += string.charCodeAt(index);
  }
  return total;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0