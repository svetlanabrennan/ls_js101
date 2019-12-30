let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let member in munsters) { // using for/in loop
  console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}.`);
}

for (let [key, value] of Object.entries(munsters)) { // using for/in with entries method
  console.log(`${key} is a ${value.age}-year-old ${value.gender}.`)
}

Object.entries(munsters).forEach(member => { // using entries with forEach method
  let name = member[0];
  let personAge = member[1].age;
  let personGender = member[1].gender;
  console.log (`${name} is a ${personAge}-year-old ${personGender}.`)
});