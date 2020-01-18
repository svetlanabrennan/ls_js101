function letterPercentages(string) { // using regex
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  obj.lowercase = (((string.match(/[a-z]/g) || []).length / string.length * 100).toFixed(2))
  obj.uppercase = (((string.match(/[A-Z]/g) || []).length / string.length * 100).toFixed(2))
  obj.neither = (((string.match(/[^a-z]/gi) || []).length / string.length * 100).toFixed(2))

  return obj;
}

function letterPercentages(string) { // using forEach
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  string.split("").forEach(chr => {
      if (chr.match(/[a-z]/)) {
        obj.lowercase += 1;
      } else if (chr.match(/[A-Z]/)) {
        obj.uppercase += 1;
      } else {
        obj.neither += 1;
      }
  });
  
  obj.lowercase = ((obj.lowercase / string.length) * 100).toFixed(2);
  obj.uppercase = ((obj.uppercase / string.length) * 100).toFixed(2);
  obj.neither = ((obj.neither / string.length) * 100).toFixed(2);

  return obj;
}

console.log(letterPercentages('abCdef 123'));