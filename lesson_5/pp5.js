let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let array = Object.values(munsters); // using forEach loop
let sum = 0;

array.forEach(obj => {
  if (obj.gender === "male") {
    sum += obj.age
  }
});

console.log(sum);


let sum = 0; // use for/in loop
for (let member in munsters) {
  if (munsters[member].gender === "male") {
    sum += munsters[member].age;
  }
}

console.log(sum);