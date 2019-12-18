let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => [1, 2] // numArray still references the original array
// [1], making a change to numArray will affect the original array element as well


// to avoid this, initialize the numArray with slice() or concat() function. 
