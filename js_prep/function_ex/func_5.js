function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// it doesn't log anything because return exits the function on line 3 before
// anything is logged to the console. 