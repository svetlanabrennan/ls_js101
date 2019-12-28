function findFibonacciIndexByLength(num) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fib;

  do {
    fib = first + second;
    index += 1;
    first = second
    second = fib
    console.log(fib);
  } while (String(fib).length < num);

  return index;
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
