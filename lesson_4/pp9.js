let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = Object.values(ages).reduce((accum, value) => { // solution 1
  return accum + value;
});

let sum = 0;
Object.values(ages).forEach(element => sum += element); // solution 2

console.log(sum);

