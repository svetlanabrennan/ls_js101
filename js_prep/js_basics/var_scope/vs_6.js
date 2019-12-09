let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// logs false because the b variable reassignment is not available outside of 
// the if statement block. 