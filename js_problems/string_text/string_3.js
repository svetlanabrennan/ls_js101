function letterCaseCount(string) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  for (let i = 0; i < string.length; i += 1) {
    if (/[a-z]/.test(string[i])) {
      obj.lowercase += 1;
    } else if (/[A-Z]/.test(string[i])) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));   