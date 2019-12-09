function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// it'll produce an error because the variable a initialization on line 6
// causea a reference error that a is not available on line 5 before it 
// was reinitialized on line 6.