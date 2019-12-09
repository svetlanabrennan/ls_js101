let array1 = [1, 2, undefined, 4]; // length: 4

let array2 = [1]; // length: 5 
array2.length = 5;

let array3 = []; // length 0
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; // length: 3
array4.length = 3;

let array5 = []; // length: 101
array5[100] = 3;