[1, 2, 3].filter(num => 'hi');

// it'll return a new array that pass the truthy test. Since the code "hi" evaluates
// to truthy for each element in the array, the filter method returns [1, 2, 3]