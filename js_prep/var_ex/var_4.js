const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// The first 3 lines prints the Victor greeting. 
// Erorr occurs when we try to reassign NAME to equal "Joe".
// We get an error saying that you're trying to reassign a constant variable which is not allowed. 