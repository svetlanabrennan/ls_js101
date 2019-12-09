let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// line 15 prints prints "hi" because property a in foo was reassigned to "hi"
// when it was called on line 13. 

// line 16 prints "hello" because the method call on line 13 because the function
// bar reassgins the argument2 variable inside the function and it doesn't
// affect the variable on line 6. 