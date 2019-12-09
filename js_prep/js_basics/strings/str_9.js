function capsWord(string) {
  array = string.split(" ");
  result = []

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i][0].toUpperCase() + array[i].slice(1));
  }
  return result.join(" ");
}

console.log(capsWord('launch school tech & talk'));