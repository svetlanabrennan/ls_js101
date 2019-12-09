let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// line 6 will print "bar" since the variable foo inside the block is not accessible outside the
// block. The inner variable foo inside the block shadows (hides) the outer scope variable on line
// 1 since it has the same name. 