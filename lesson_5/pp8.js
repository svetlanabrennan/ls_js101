let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(array => {
  array.forEach(word => {
    word.split("").forEach(chr => {
      if (chr.match(/[aeiou]/)) {
       return console.log(chr);
      }
    })
  })
})