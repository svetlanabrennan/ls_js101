// Snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?


// Snippet 2:

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

// Snippet 1 will print prefix: "Pacific" and Snippet 2 will print 
// Indian: "Pacific"