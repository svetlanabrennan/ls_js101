['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// it'll return [undefined, "bear"]; because if an element isn't executed for the 
// if statement since it's false and the element isn't returned and is there is no
// return value for the callback, map returns undefined for that element. 