let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.Spot); // this tries to find the key of "Spot" and returns undefined
console.log(ages.hasOwnProperty("Spot")); // course solution: this returns false