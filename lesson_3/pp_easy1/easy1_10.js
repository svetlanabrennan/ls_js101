let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.indexOf("house"));
console.log(advice.slice(0,39));

advice.slice(0, advice.indexOf("house")); // refactored