const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No it will not produce an error because the variable is a constant so it's 
// accessible inside the block but line 6 prints "bar". 