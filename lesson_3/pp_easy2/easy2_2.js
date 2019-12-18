let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(0).reverse());
console.log([...numbers].sort((num1, num2) => num2 - num1));

// bonus 1
reversedArray = [];

numbers.forEach((element, index, array) => {
 reversedArray.push(array[array.length - 1 - index]);
});

console.log(reversedArray);
console.log(numbers);

// bonus 2
let reversedArray = numbers.reduce((acc, num) => ([num, ...acc]), []);

console.log(reversedArray);
console.log(numbers);