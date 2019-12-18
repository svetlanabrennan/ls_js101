function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // this will return prop1: "hi there"
console.log(second()); // this returns undefined since the { } is on the next line