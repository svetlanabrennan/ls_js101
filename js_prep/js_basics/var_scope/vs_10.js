const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// the element reassignment inside the function affects the const object in 
// the outer scope as well so it prints Jane and Doe to the console. 