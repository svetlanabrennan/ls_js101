num = 4936
let ones = num % 10

num = (num - ones) / 10
let tens = num % 10


num = (num - tens) / 10
let hundreds = num % 10

let thousands = (num - hundreds) / 10

console.log(ones)
console.log(tens)
console.log(hundreds)
console.log(thousands)