// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers)

// it won't raise an error, line 2 will extend the length of the array and assign
// index 6 an element of 5. And index 3 to 5 will be empty.

//Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]);  // what will this line return?

// it will returned undefined since index 4 is empty. 