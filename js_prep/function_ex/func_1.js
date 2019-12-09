let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// the code logs the number 1 to the console (line 7 can only access the global
// variable, not the local variable inside the function). Executing the foo function
// doesn't affect the output because the function doesn't do anything with the 
// return value. 