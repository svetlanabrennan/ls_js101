// A)
function messWithVars(one, two, three) {
  one = two; // this doesn't mutate the caller, it's just reassigning the variable to a new object
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // it'll print "one"
console.log(`two is: ${two}`); // it'll print "two"
console.log(`three is: ${three}`); // it'll print "three"

// B)
function messWithVars(one, two, three) {
  one = ["two"]; // this doesn't mutate the caller, it's assigning a new value to whole variable
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // it'll print "one"
console.log(`two is: ${two}`); // it'll print "two"
console.log(`three is: ${three}`); // it'll print "three"

// C)
function messWithVars(one, two, three) {
  one.splice(0, 1, "two"); // splice method is destructive and makes changes in place
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // it'll print "two"
console.log(`two is: ${two}`); // it'll print "three"
console.log(`three is: ${three}`); // it'll print "one"