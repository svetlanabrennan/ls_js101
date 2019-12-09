for (let i = 0; i < 5;) {
  console.log(i += 1);
}
 // it will not produce an error because i is still incremented in the console.log
 // function so it will output 1, 2, 3, 4, 5 to the console and then break.