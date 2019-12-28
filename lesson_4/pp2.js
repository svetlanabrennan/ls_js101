[1, 2, 3].map(num => {
  num * num;
});

// returns undefined for each element since there is no explicit return in the 
// callback function so it'll be [undefined, undefined, undefined]