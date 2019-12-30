let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; // [4, [5, 8]] & a is still 2
arr[1][0] -= a; // [4, [3, 8]] b is [3, 8]

console.log(arr);
console.log(a);
console.log(b);