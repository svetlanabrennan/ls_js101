function swapCase(string) {
  return string
    .split("")
    .map(chr => {
      if (chr === chr.toUpperCase()) {
        return chr.toLowerCase();
      } else if (chr === chr.toLowerCase()) {
        return chr.toUpperCase();
      } else {
        return chr;
      }
    }).join("");
}

function swapCase(string) { // using regex
  return string
    .split("")
    .map(chr => {
      if (/[A-Z]/.test(chr)) {
        return chr.toLowerCase();
      } else if (/[a-z]/.test(chr)) {
        return chr.toUpperCase();
      } else {
        return chr;
      }
    }).join("");
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'))