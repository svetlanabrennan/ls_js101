let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
}

for (prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// it will never print "Its true!" because the if statement in the foor loop
// is checking if the properties equal to boolean true but it doesn't because
// the properties in the object are always strings. 