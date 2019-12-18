function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(num) {
  if (!Number.isInteger(num)) return false;

  let number = Number(num);
  return number >= 0 && number <= 255;
}

let ip = "10\.4\.5\.11"

console.log(isDotSeparatedIpAddress(ip));